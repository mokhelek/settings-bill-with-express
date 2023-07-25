import { engine } from "express-handlebars";
import express from "express";
import bodyParser from "body-parser";
import SettingsBill from "./public/js/settings-bill.js";

let app = express();

app.use(express.static("public")); // * Set the static files folder

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let settingsBill = SettingsBill();

// ******************************* ROUTES **********************************

app.get("/", function (req, res) {
    res.render("home", {
        smsCost: settingsBill.getSettings().smsCost,
        callCost: settingsBill.getSettings().callCost,
        warningLevel: settingsBill.getSettings().warningLevel,
        criticalLevel: settingsBill.getSettings().criticalLevel,

        totals: settingsBill.totals(),
    });
});

app.post("/settings", function (req, res) {
    if (req.body.smsCost && req.body.callCost && req.body.warningLevel && req.body.criticalLevel) {
        settingsBill.setSettings({
            smsCost: req.body.smsCost,
            callCost: req.body.callCost,
            warningLevel: req.body.warningLevel,
            criticalLevel: req.body.criticalLevel,
        });

        res.redirect("/");
    }
});

app.post("/action", (req, res) => {
    settingsBill.recordAction(req.body.billItemTypeWithSettings);
    res.redirect("/");
});

app.get("/actions", (req, res) => {
    res.render("actions", { actions: settingsBill.actions() });
});

app.get("/actions/:actionType", (req, res) => {
    const actionsType = req.params.actionType;
    res.render("actions", {
        actions: settingsBill.actionsFor(actionsType),
    });
});

let PORT = 3000;
app.listen(PORT, function () {
    console.log("App starting on port", PORT);
});
