import PostsList from "./Pages/Post/post.vue";
import CreatePost from "./Pages/Post/createpost.vue";
import EditPost from "./Pages/Post/editpost.vue";
export const routes = [
    {
        path: "/",
        name: "PostsList",
        component: PostsList,
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
    },
    {
        path: "/edit-post/:id",
        name: "EditPost",
        component: EditPost,
    },
];