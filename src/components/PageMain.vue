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

        <!-- sezione new courses -->
        <section id="new_courses">
            <div class="container">
                <h1 class="text-center">New Courses</h1>

                <div class="row row-cols-2 row-cols-lg-3 g-0 gy-4 gx-4 align-items-center">
                    <div class=" col-md-6 ms-md-6">
                        <img src="/new_courses_1.jpeg" alt="">
                        <div class="card_text text-center">
                            <h5>How to be a DJ? Make Electronic Music</h5>
                            <span>Electronic</span>
                            <hr>
                            <div class="card_icons">
                                <div>
                                    <i class="fa-solid fa-signal"></i>
                                    <span> Advanced</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-list-ul"></i>
                                    <span> 8 Lectures</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-clock"></i>
                                    <span> 6 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ms-md-6">
                        <img src="/new_courses_2.png" alt="">
                        <div class="card_text text-center">
                            <h5>Nvidia and UE4 Technlogies Practice</h5>
                            <span>Nvidia</span>
                            <hr>
                            <div class="card_icons">
                                <div>
                                    <i class="fa-solid fa-signal"></i>
                                    <span> Advanced</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-list-ul"></i>
                                    <span> 8 Lectures</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-clock"></i>
                                    <span> 6 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ms-md-6">
                        <img src="/new_courses_3.jpeg" alt="">
                        <div class="card_text text-center">
                            <h5>Fashion Photography from professional</h5>
                            <span>Fashion</span>
                            <hr>
                            <div class="card_icons">
                                <div>
                                    <i class="fa-solid fa-signal"></i>
                                    <span> Advanced</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-list-ul"></i>
                                    <span> 8 Lectures</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-clock"></i>
                                    <span> 6 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ms-md-6">
                        <img src="/new_courses_4.jpeg" alt="">
                        <div class="card_text text-center">
                            <h5>Design Instruments for Communication</h5>
                            <span>Communication</span>
                            <hr>
                            <div class="card_icons">
                                <div>
                                    <i class="fa-solid fa-signal"></i>
                                    <span> Advanced</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-list-ul"></i>
                                    <span> 8 Lectures</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-clock"></i>
                                    <span> 6 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ms-md-6">
                        <img src="/new_courses_5.jpg" alt="">
                        <div class="card_text text-center">
                            <h5>Make your Concept Right and Beautiful</h5>
                            <span>Art</span>
                            <hr>
                            <div class="card_icons">
                                <div>
                                    <i class="fa-solid fa-signal"></i>
                                    <span> Advanced</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-list-ul"></i>
                                    <span> 8 Lectures</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-clock"></i>
                                    <span> 6 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ms-md-6">
                        <img src="/new_courses_6.jpeg" alt="">
                        <div class="card_text text-center">
                            <h5>Road Bike Manual or How to Be a Champion.</h5>
                            <span>Bicycling</span>
                            <hr>
                            <div class="card_icons">
                                <div>
                                    <i class="fa-solid fa-signal"></i>
                                    <span> Advanced</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-list-ul"></i>
                                    <span> 8 Lectures</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-clock"></i>
                                    <span> 6 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="text-center">
                    <button id="new_courses_button">LOAD MORE</button>
                </div>
            </div>
        </section>

        <!-- sezione book order -->
        <section id="book_order">
            <div class="container">
                <div class="book_order_left text-center">
                    <h1>Get My Exclusive Investing Book just fot $19.50</h1>
                    <p>Vestibulum imentum eu urna vel cursus. Aenean vehicula quam quam, vitae pellentesque urna elementum
                        cursus.</p>
                    <img src="../../public/amazon.png" alt="">
                </div>
                <div class="book_order_right">
                </div>
            </div>
        </section>


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

    #new_courses {
        height: 1000px;
        background-color: $primary-section-color;
        display: flex;
        align-items: center;

        .container {
            height: 80%;

            h1 {
                font-weight: bold;
            }

            .card_text {
                background-color: white;

                h5 {
                    padding-top: 20px;
                    padding-bottom: 10px;
                    font-weight: bold;
                    width: 85%;
                    margin: auto;
                }

                span {
                    font-size: 14px;
                    color: rgb(156, 156, 156);
                }

                hr {
                    width: 90%;
                    margin: auto;
                    color: rgb(156, 156, 156);
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                .card_icons {
                    @include flex-around;
                    padding-bottom: 10px;

                    i {
                        color: $footer-color;
                    }

                    span {
                        font-size: 12px;
                        color: black;
                    }
                }
            }

            #new_courses_button {
                background-color: $footer-color;
                color: white;
                border: none;
                border-radius: 20px;
                padding: 7px 15px;
                margin-top: 50px;
            }
        }

    }

    #book_order {
        height: 500px;
        background-image: url('/book_order_bg.jpg');
        background-size: cover;

        .container {

            display: flex;
            @include flex-center;

            .book_order_left {
                width: 50%;

                h1 {
                    color: $footer-color;
                    font-weight: bold;
                }

                p {
                    color: white;
                    font-size: 25px;
                    font-style: italic;
                }

                img {
                    width: 35%;
                }
            }

            .book_order_right {
                width: 50%;
                height: 500px;
                background-image: url('../../public/book.png');
                background-position: bottom;
                background-size: 90%;
                background-repeat: no-repeat;
            }
        }


    }
}
</style>