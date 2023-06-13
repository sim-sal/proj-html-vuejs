<script>
import { store } from '../store'

export default {
    name: "PageMain",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <!-- jumbotron -->
        <div class="jumbotron">
            <div class="container">
                <div class="text_jumbo">

                    <!-- titolo -->
                    <div id="jumbo_title">
                        <h1>Start your Human </h1>
                        <h1 id="revolution">Revolution</h1>
                        <h1> today</h1>
                    </div>

                    <!-- piccolo paragrafo -->
                    <div>
                        <p><span>A wonderful serenity has take possession of my entire soul, like these sweet mornings
                                of
                                spring which I enjoy with my whole heart.</span></p>
                    </div>

                </div>
            </div>

        </div>

        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </main>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

main {
    .jumbotron {
        height: 650px;
        background-image: url('/jumbotron.jpg');
        background-size: cover;

        .container {
            height: 650px;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .text_jumbo {
                width: 50%;

                #jumbo_title {
                    margin-bottom: 20px;
                }

                h1 {
                    font-size: 60px;
                    font-weight: bold;
                    display: inline;
                }


                #revolution {
                    color: $footer-color;
                }
            }
        }
    }
}
</style>