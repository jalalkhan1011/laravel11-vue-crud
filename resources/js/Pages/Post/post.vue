<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h1>Posts</h1>
                <router-link to="/create-post" class="btn btn-secondary"
                    >Create</router-link
                >
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, key) in posts" :key="post.id">
                        <td>{{ key }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.description }}</td>
                        <td>
                            <router-link
                                :to="{
                                    name: 'EditPost',
                                    params: { id: post.id },
                                }"
                                class="btn btn-info"
                                >Edit</router-link
                            >
                            <button
                                type="button"
                                class="btn btn-danger ms-2"
                                v-on:click="deletePost(post.id)"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </template>
    
    <script>
    import axios from "../config/axios.js";
    import toastr from "toastr";
    export default {
        name: "Posts",
        data() {
            return {
                posts: [], // Initial state
            };
        },
        mounted() {
            this.getPosts();
        },
        methods: {
            async getPosts() {
                let res = await axios.get("/api/posts");
                this.posts = res.data.posts;
            },
            async deletePost(id) {
                let res = await axios.get(`/api/posts/delete/${id}`);
                toastr.success(res.data.message);
                this.getPosts();
            },
        },
    };
    </script>
    
              