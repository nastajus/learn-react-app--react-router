This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

These components were created to demonstrate React Router, following several YouTube videos this **ReactJS Basics** playlist by Academind:
- [#15 React Router - Route Setup](https://www.youtube.com/watch?v=eofpZPRUnP8&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=16)
- [#16 React Router - Navigation & Parameters](https://www.youtube.com/watch?v=5pt_igBTCsI&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=17)




### Problems resolved

Changed `react-router` version to 3.2.0. I bounced around between a few versions until this worked. Given more time, I would work to understand more deeply what precise dependencies aren't compatible.

At first defaulting to the latest version 4.2.0 turned out to be incompatible with the latest React version, giving the error message: `'react-router' does not contain an export named 'browserHistory'.` Googling that I discovered I migration guide [here](https://github.com/ReactTraining/react-router/blob/25776d4dc89b8fb2f575884749766355992116b5/packages/react-router/docs/guides/migrating.md#the-router), which explained their system evolved. Since using the latest 4 series **react-router** required several code changes, I tried instead matching the precise version, which happened to be 2.6.1. Yet that also yielded another error `TypeError: Cannot read property 'func' of undefined`. However searching that turned up [this](https://github.com/ReactTraining/react-router/issues/5605), which suggested using version 3.2.0. Which works.
