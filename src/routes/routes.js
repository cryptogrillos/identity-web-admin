import Login from "@/views/Login/Login.vue";
import Home from "@/views/Home/Home.vue";
import VerificationList from "@/views/Verification/VerificationList.vue";
import VerificationDetails from "@/views/Verification/VerificationDetails.vue";
import Verify from "@/views/Verification/Verify.vue";
import PermissionDetails from "@/views/Permission/PermissionDetails.vue";
import PermissionsList from "@/views/Permission/PermissionsList.vue";
import Navigation from "@/views/Navigation/Navigation.vue";
import NotFound from '@/views/Navigation/404.vue';

const routes = [
  {
    path: "/",
    component: Navigation,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "permission/:id",
        name: "Permission details",
        component: PermissionDetails
      },
      {
        path: "verify",
        name: "Verify",
        component: Verify
      },
      {
        path: "permissions",
        name: "Permission list",
        component: PermissionsList
      },
      {
        path: "verifications",
        name: "Verification list",
        component: VerificationList
      },
      {
        path: "verification/:id",
        name: "Verification list",
        component: VerificationDetails
      },

    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  { path: '*', 
    component: NotFound 
  }
];

export default routes;
