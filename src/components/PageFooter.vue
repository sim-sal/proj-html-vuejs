<script>
import { store } from '../store'

export default {
    name: "PageFooter",
    data() {
        return {
            store,
        }
    },
    props: {
        about: Object,
        contact: Object,
        pages: Object,
        blog: Object
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">

                <div class="col-3" v-for="content in about">
                    <h5>{{ content.title }}</h5>
                    <span>{{ content.text }}</span><br>
                    <span>{{ content.developed }}</span><br>
                    <span>{{ content.facebookIcon }}</span>

                </div>

                <div class="col-3" v-for="content in contact">
                    <h5>{{ content.title }}</h5>
                    <span>{{ content.address }}</span><br>
                    <span>{{ content.tel }}</span><br>
                    <span>{{ content.fax }}</span><br>
                    <span>{{ content.email }}</span>
                </div>

                <div class="col-3" v-for="content in pages">
                    <h5>{{ content.title }}</h5>

                    <div class="pages_list">
                        <ul>
                            <li v-for="li in content.firstPagesList">{{ li }}</li>
                        </ul>

                        <ul>
                            <li v-for="li in content.secondPagesList">{{ li }}</li>
                        </ul>
                    </div>

                </div>

                <div class="col-3" v-for="content in blog">
                    <h5>{{ content.title }}</h5>
                </div>

            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

footer {
    height: 300px;
    background-color: $footer-color;

    .container {

        height: 100%;
        @include flex-center;

        .row {
            div {

                font-size: 13px;

                h5 {
                    font-weight: bold;
                }

                .pages_list {

                    display: flex;

                    ul {
                        li {
                            margin-left: -15px;
                        }
                    }
                }

            }
        }
    }
}
</style>