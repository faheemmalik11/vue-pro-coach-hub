import {createRouter, createWebHistory} from 'vue-router'
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
    {
        path: '/', 
        redirect: '/coaches'
    },
    {
        path: '/coaches', 
        component: CoachesList
    },
    {
        path: '/coaches/:id', 
        component: CoachDetails,
        props: true,
        children: [
            {
                path: 'contact', 
                component: ContactCoach
            }
        ]
    },
    {
        path: '/register', 
        component: CoachRegister
    },
    {
        path: '/requests', 
        component: RequestReceived
    },
    {
        path: '/:notFound(.*)', 
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;