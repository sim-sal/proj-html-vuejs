<script>
import { store } from '../store'

export default {
    name: "PageHeader",
    data() {
        return {
            store,
        }
    },
    props: {
        nav_link: Object
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-4">
                    <!-- logo -->
                    <div id="logo">
                        <img src="/MasterStudy-1.svg" alt="logo">
                    </div>
                </div>

                <div class="col-6">
                    <!-- menù navigazione -->
                    <nav>

                        <ul class="header_menu">

                            <li v-for="(link, i) in nav_link" :key="i">
                                <a :href="link.url">
                                    {{ link.text }}
                                </a>
                            </li>

                        </ul>

                    </nav>
                </div>

                <div class="col-2">
                    <!-- icone -->
                    <div class="header_icons">
                        <a href="#">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

header {
    height: 120px;

    .container {

        .row {
            height: 120px;

            .header_menu {
                @include flex-around;
                padding-top: 12px;
                list-style: none;

                li {

                    a {
                        text-decoration: none;
                        font-weight: bold;
                        color: $text-color;
                    }
                }
            }

            .header_icons {
                @include flex-around;

                a {
                    i {
                        color: $text-color;
                    }
                }

            }
        }
    }
}
</style>