const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Magic test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "136.0.7103.114",
        },
        device: "PC",
        platform: {
            name: "MacOS",
            version: "15.4.1",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Magic" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke" }
        ],
    },
});