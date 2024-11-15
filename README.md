# architechure-plan
Assumiptions:
 - Online Consultation App
 - React as Frontend 
 - styles tailwind css or any other library
 

## folder structure
src/
│
├── assets/
│
├── components/
│
├── context/
│   ├── authContext.js
│   └── userContext.js
│
├── modules/
│   ├── appointments/
│   │   ├── pages/
│   │   │   ├── appointment.js
│   │   │   └── list.js
│   │   └── shared/
│   │
│   ├── patients/
│   │   ├── pages/
│   │   │   ├── appointment.js
│   │   │   └── list.js
│   │   └── shared/
│   │
│   └── reports/
│       ├── pages/
│       └── shared/
│
├── redux/
│   ├── actions/
│   │   ├── authActions.js
│   │   └── userActions.js
│   ├── reducers/
│   │   ├── authReducer.js
│   │   └── userReducer.js
│   └── store.js
│
├── services/
│   ├── authService.js
│   ├── userService.js
│   └── appointmentService.js
│
├── ui/
│   ├── button/
│   │   └── Button.js
│   ├── alert/
│   │   └── Alert.js
│   ├── dialog/
│   │   └── Dialog.js
│   └── input/
│       └── Input.js
│
├── utils/
│   ├── formatDate.js
│   ├── calculateAge.js
│   └── debounce.js
│
└── styles/
