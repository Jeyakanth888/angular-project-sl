"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environments/environment");
var fromDashboard = require("../dashboard/reducers/dashboard.reducer");
var fromReview = require("../review/reducers/review.reducer");
var fromGuidedReview = require("../guided-review/reducers/guided-review.reducer");
exports.reducers = {
    dashboard: fromDashboard.reducer,
    review: fromReview.reducer,
    guidedReview: fromGuidedReview.reducer
};
exports.metaReducers = !environment_1.environment.production ? [] : [];
//# sourceMappingURL=index.js.map