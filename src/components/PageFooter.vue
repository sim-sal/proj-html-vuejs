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
        footer_content: Object
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">

                <div class="col-3" v-for="content in footer_content">
                    <h5>{{ content.title }}</h5>

                    <!-- about --> <!-- contact -->
                    <span>{{ content.text }}{{ content.address }}</span><br>
                    <span>{{ content.developed }}{{ content.tel }}</span><br>
                    <span>{{ content.fax }}</span><br>
                    <span>{{ content.email }}</span>

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
        .row {
            div {
                h5 {
                    font-weight: bold;
                }

                span {
                    font-size: 13px;
                }
            }
        }
    }
}
</style>