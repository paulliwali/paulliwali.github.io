Its a regression with a specific loss function called the pinball loss

If observation is greater than the prediction, minimize the absolute difference between observation and prediction which is L1 loss (the MAE). This cost function has a $\tau$ parameter which is applied differently to over predicting and under predicting. 
**Summarizing these insights, the pinball loss is a cost-sensitive loss function based on absolute differences. As a consequence, quantile regression is a regression task that favors robust models and we can steer how strongly the model should under- or over-predict with parameter $\tau$.**

The parameter $\tau$ tells us how often we should expect the target to over- or under- predict.

#data-science #statistics 