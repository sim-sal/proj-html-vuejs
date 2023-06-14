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
        <div id="jumbotron">
            <div class="container jumbo">
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

            <div class="input_counter">
                <div class="row align-items-center row_input_counter">
                    <div class="col-6 text-center">
                        <h3 class="discount"><span class="limited_sale">Limited Sale:</span> All courses with 55% off</h3>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" placeholder="Enter your E-mail"
                                aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="container_counter text-center">
                            <div>
                                <h1 class="numbers">26</h1>
                                <span><strong>Days</strong></span>
                            </div>
                            <div>
                                <h1 class="numbers">01</h1>
                                <span><strong>Hours</strong></span>
                            </div>
                            <div>
                                <h1 class="numbers">47</h1>
                                <span><strong>Minutes</strong></span>
                            </div>
                            <div>
                                <h1 class="numbers">34</h1>
                                <span><strong>Seconds</strong></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <!-- sezione presentazione -->
        <section id="presentation">
            <div class="container">
                <div class="row text-center align-items-center">
                    <div class="col-5">
                        <div class="presentation_signature">
                            <h2>Hey there, my name is John Doe. I'm the founder of the Brain Academy.</h2>
                            <img src="/sign.jpg" alt="signature">
                        </div>
                    </div>
                    <div class="col-7 text-start">
                        <div class="presentation_text">
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                                spring which I enjoy my whole heart. I am alone, and feel the charm of existence in this
                                spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so
                                absorbed in the exquisite sense of mere tranquil existence, that I neglet my talents. When,
                                while the lovely valley teems with vapour around me, and the meridian sun strikes the upper
                                surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the
                                inner sanctuary</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


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
    #jumbotron {
        height: 650px;
        background-image: url('/jumbotron.jpg');
        background-size: cover;
        position: relative;

        .jumbo {
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

        .input_counter {
            width: 65%;
            height: 180px;
            border-radius: 10px;
            position: absolute;
            background-color: $footer-color;
            top: 520px;
            left: 260px;

            .row_input_counter {
                height: 180px;

                .discount {
                    font-weight: bold;
                }

                .limited_sale {
                    color: white;
                }

                .input-group {

                    width: 90%;
                    margin: 20px auto;

                    input {
                        border-top-left-radius: 20px;
                        border-bottom-left-radius: 20px;
                    }

                    button {
                        color: white;
                        background-color: rgb(45, 70, 73);
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                }
            }

            .container_counter {
                @include flex-around;

                .numbers {
                    color: white;
                    font-weight: bold;
                    font-size: 60px;
                }
            }
        }
    }

    #presentation {
        height: 450px;

        .container {
            height: 100%;

            .row {
                height: 100%;
            }

            .presentation_signature {

                width: 80%;
                margin: auto;

                h2 {
                    text-align: left;
                    font-weight: bold;
                }
            }

            .presentation_text {
                width: 80%;
                margin: auto;
            }
        }


    }
}
</style>