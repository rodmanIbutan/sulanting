<template>
    <div class="login">
        <div class="main">
            <div class="left"></div>
            <div class="right">
                <div class="close" @click="close">X</div>
                <div class="form" v-if="formshow" ref="login">
                    <div class="formheader">
                        <h1>Sign Up</h1>
                        <span class="link">密码登录</span>
                        <span class="link">验证码登录</span>
                    </div>
                    <div class="account" ref="account">
                        <span ref="accountTitle">账号</span>
                        <input ref="accountInput" @focus="focus('account')" @blur="blur('account')" type="text"
                            v-model="labelPosition.Account">
                    </div>
                    <div class="password" ref="password">
                        <span ref="passwordTitle">密码</span>
                        <input ref="passwordInput" @focus="focus('password')" @blur="blur('password')" type="password"
                            v-model="labelPosition.password">
                    </div>
                    <span class="link">忘记密码</span>
                    <span class="link" @click="toRegister(false)">注册</span>
                    <button class="subbtn" @click="login()">START</button>
                </div>
                <div class="form register" v-if="!formshow" ref="register">
                    <div class="raccount" ref="account">
                        <span ref="accountTitle">账号</span>
                        <input ref="accountInput" @focus="focus('account')" @blur="blur('account')" type="text"
                            v-model="registerForm.Account">
                    </div>
                    <div class="raccount" ref="username">
                        <span ref="usernameTitle">用户名</span>
                        <input ref="usernameInput" @focus="focus('username')" @blur="blur('username')" type="text"
                            v-model="registerForm.username">
                    </div>
                    <div class="rpassword" ref="password">
                        <span ref="passwordTitle">密码</span>
                        <input ref="passwordInput" @focus="focus('password')" @blur="blur('password')" type="password"
                            v-model="registerForm.password">
                    </div>
                    <div class="rpassword" ref="qpassword">
                        <span ref="qpasswordTitle">确认密码</span>
                        <input ref="qpasswordInput" @focus="focus('rpassword')" @blur="blur('rpassword')" type="password"
                            v-model="registerForm.Qpassword">
                    </div>
                    <span class="link" @click="toRegister(true)">返回登录</span>
                    <button class="subbtn" @click="register">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import utils from "../../utils/index.js"
export default {
    data() {
        return {
            labelPosition: {
                Account: "",
                password: "",
            },
            registerForm: {
                Account: "",
                username: "",
                password: "",
                Qpassword: ""
            },
            formshow: true
        }

    },
    methods: {
        goTo() {
            this.$router.push("/register")
        },
        close() {
            this.$store.commit("setShow", false)
        },
        check(e) {
            if (e == "login") {
                if (!(this.labelPosition.Account) || !(this.labelPosition.password)) {
                    this.$message({
                        message: '不能为空',
                        type: 'error',
                        showClose: true,
                        duration: 3000,
                    });
                    if (!this.labelPosition.Account) {
                        this.$refs.accountTitle.style.color = "red"
                        this.$refs.accountInput.style.borderBottom = "red 2px solid"
                        this.$refs.account.classList.add("shake")
                        setTimeout(() => {
                            this.$refs.account.classList.remove("shake")
                        }, 1500);
                    };
                    if (!this.labelPosition.password) {
                        this.$refs.passwordTitle.style.color = "red"
                        this.$refs.passwordInput.style.borderBottom = "red 2px solid"
                        this.$refs.password.classList.add("shake")
                        setTimeout(() => {
                            this.$refs.password.classList.remove("shake")
                        }, 1500);
                    }
                    return false
                }
                else {
                    return true
                }
            } else {
                if (!this.registerForm.Account || !this.registerForm.password || !this.registerForm.Qpassword || !this.registerForm.username) {
                    this.$message({
                        message: '不能为空',
                        type: 'error',
                        showClose: true,
                        duration: 3000,
                    });
                    if (!this.registerForm.ASccount) {
                        this.$refs.accountTitle.style.color = "red"
                        this.$refs.accountInput.style.borderBottom = "red 2px solid"
                        this.$refs.account.classList.add("shake")
                        setTimeout(() => {
                            this.$refs.account.classList.remove("shake")
                        }, 1000);
                    }
                    if (!this.registerForm.password) {
                        this.$refs.passwordTitle.style.color = "red"
                        this.$refs.passwordInput.style.borderBottom = "red 2px solid"
                        this.$refs.password.classList.add("shake")
                        setTimeout(() => {
                            this.$refs.password.classList.remove("shake")
                        }, 1000);
                    }
                    if (!this.registerForm.username) {
                        this.$refs.usernameTitle.style.color = "red"
                        this.$refs.usernameInput.style.borderBottom = "red 2px solid"
                        this.$refs.username.classList.add("shake")
                        setTimeout(() => {
                            this.$refs.username.classList.remove("shake")
                        }, 1000);
                    }
                    if (!this.registerForm.Qpassword) {
                        this.$refs.qpasswordTitle.style.color = "red"
                        this.$refs.qpasswordInput.style.borderBottom = "red 2px solid"
                        this.$refs.qpassword.classList.add("shake")
                        setTimeout(() => {
                            this.$refs.qpassword.classList.remove("shake")
                        }, 1000);
                    }
                    return false
                } else {
                    return true
                }
            }
        },
        async login() {
            if (this.check("login")) {
                utils.login(this.labelPosition.Account, this.labelPosition.password).then(result => {
                    console.log(result);
                    if (result.code == 200) {
                        this.$message({
                            message: result.message,
                            type: 'success'
                        })
                        this.$store.commit("setUser",result.result)
                        this.$store.state.isLogin = true;
                        setTimeout(() => {
                            this.$store.state.isShow=false
                            // this.$router.push('/blank')
                            location.reload()
                        }, 1500);
                    } else if (result.code == 400) {
                        this.$message({
                            message: result.message,
                            type: 'error'
                        })
                    } else {
                        this.$message({
                            message: "错误，请联系管理员",
                            type: 'error'
                        })
                    }
                })
            }
        },
        async register() {
            if (this.check("register")) {
                utils.register(this.registerForm.Account, this.registerForm.username, this.registerForm.password).then(result => {
                    if (result.code == 200) {
                        this.$message({
                            message: result.message,
                            type: "success"
                        });
                        setTimeout({
                            formshow: false
                        }, 1000)
                    } else if (result.code == 400) {
                        this.$message({
                            message: result.message,
                            type: 'error',
                            showClose: true,
                            duration: 3000,
                        });
                    } else {
                        this.$message({
                            message: '意外的错误，请联系管理员',
                            type: 'error',
                            showClose: true,
                            duration: 3000,
                        });
                    }
                })
            }
        },
        toRegister(e) {
            if (!e) {
                this.labelPosition = {
                    Account: "",
                    password: "",
                };
                this.registerForm = {
                    Account: "",
                    username: "",
                    password: "",
                    Qpassword: ""
                };
                this.$refs.accountTitle.style.color = "#a6a8ac";
                this.$refs.accountInput.style.borderBottom = "#e0e2e6 2px solid";
                this.$refs.account.style.transform = "scale(0.95)";
                this.$refs.passwordTitle.style.color = "#a6a8ac";
                this.$refs.passwordInput.style.borderBottom = "#e0e2e6 2px solid";
                this.$refs.password.style.transform = "scale(0.95)";
                this.formshow = e;
            } else {
                this.labelPosition = {
                    Account: "",
                    password: "",
                };
                this.registerForm = {
                    Account: "",
                    username: "",
                    password: "",
                    Qpassword: ""
                };
                this.$refs.accountTitle.style.color = "#a6a8ac";
                this.$refs.accountInput.style.borderBottom = "#e0e2e6 2px solid";
                this.$refs.account.style.transform = "scale(0.95)";
                this.$refs.passwordTitle.style.color = "#a6a8ac";
                this.$refs.passwordInput.style.borderBottom = "#e0e2e6 2px solid";
                this.$refs.password.style.transform = "scale(0.95)";
                this.$refs.usernameTitle.style.color = "#a6a8ac";
                this.$refs.usernameInput.style.borderBottom = "#e0e2e6 2px solid";
                this.$refs.username.style.transform = "scale(0.95)";
                this.$refs.qpasswordTitle.style.color = "#a6a8ac";
                this.$refs.qpasswordInput.style.borderBottom = "#e0e2e6 2px solid";
                this.$refs.qpassword.style.transform = "scale(0.95)";
                this.formshow = e;
            }
        },
        focus(val) {
            if (val == "account") {
                this.$refs.accountTitle.style.color = "#68945c"
                this.$refs.accountInput.style.borderBottom = "#68945c 2px solid"
                this.$refs.account.style.transform = "scale(1)";
            } else if (val == "username") {
                this.$refs.usernameTitle.style.color = "#68945c"
                this.$refs.usernameInput.style.borderBottom = "#68945c 2px solid"
                this.$refs.username.style.transform = "scale(1)";

            } else if (val == "password") {
                this.$refs.passwordTitle.style.color = "#68945c"
                this.$refs.passwordInput.style.borderBottom = "#68945c 2px solid"
                this.$refs.password.style.transform = "scale(1)";
            } else {
                this.$refs.qpasswordTitle.style.color = "#68945c"
                this.$refs.qpasswordInput.style.borderBottom = "#68945c 2px solid"
                this.$refs.qpassword.style.transform = "scale(1)";
            }
        },
        blur(val) {
            if (val == "account") {
                this.$refs.accountTitle.style.color = "#a6a8ac"
                this.$refs.accountInput.style.borderBottom = "#e0e2e6 2px solid"
                this.$refs.account.style.transform = "scale(0.95)";
            } else if (val == "username") {
                this.$refs.usernameTitle.style.color = "#a6a8ac"
                this.$refs.usernameInput.style.borderBottom = "#e0e2e6 2px solid"
                this.$refs.username.style.transform = "scale(0.95)";
            }
            else if (val == "password") {
                this.$refs.passwordTitle.style.color = "#a6a8ac"
                this.$refs.passwordInput.style.borderBottom = "#e0e2e6 2px solid"
                this.$refs.password.style.transform = "scale(0.95)";
            } else {
                this.$refs.qpasswordTitle.style.color = "#a6a8ac"
                this.$refs.qpasswordInput.style.borderBottom = "#e0e2e6 2px solid"
                this.$refs.qpassword.style.transform = "scale(0.95)";
            }
        }
    }
}
</script>
<style scoped>
.main {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    width: 900px;
    height: 550px;
    border-radius: 10px;
    border: solid 1px #ebeef5;
    box-shadow: 0 0 20px 5px #ebeef5;
    z-index: 15;
}

.left{
    position: absolute;
    left: 0;
    margin: 0;
    width: 500px;
    height: 550px;
    background:url(../../../public/img/test10.jpg) no-repeat;
    background-size: cover;
}
.right {
    /*
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    */
    position: absolute;
    right: 0;
    width: 300px;
    height: 430px;
    background-color: #fff;
    padding: 60px 50px;
    overflow: hidden;
    z-index: 14;
}

.right>span {
    margin-right: 30px;
}

.form {
    width: 300px;
    height: 450px;

}

.formheader>span {
    margin-right: 30px;
    margin-bottom: 20px;
}

.account>span,
.password>span {
    line-height: 30px;
    height: 30px;
    display: block;
    transition: 0.2s;
}

.account {
    margin-top: 20px;
    margin-bottom: 40px;
    color: #a6a8ac;
    transition: 0.2s;
    transform: scale(0.95);

}

.password {
    margin-bottom: 30px;
    color: #a6a8ac;
    transition: 0.2s;
    transform: scale(0.95);
}

.raccount>span,
.rpassword>span {
    line-height: 20px;
    height: 20px;
    display: block;
    transition: 0.2s;
}

.raccount {
    margin-bottom: 20px;
    color: #a6a8ac;
    transition: 0.2s;
    transform: scale(0.95);

}

.rpassword {
    margin-bottom: 20px;
    color: #a6a8ac;
    transition: 0.2s;
    transform: scale(0.95);
}

.register>input {
    font-size: 16px;
    height: 30px;
    width: 100%;
    font-weight: 500;
    letter-spacing: 0;
    transition: 0.2s;
}

input {
    outline: none;
    border: none;
    border-bottom: #e0e2e6 2px solid;
    font-size: 16px;
    height: 40px;
    width: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    transition: 0.2s;
}

h1 {
    text-align: left;
    font-size: 20px;
    color: #496740;
    height: 50px;
}

.close {
    color: #000;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 32px;
    /* height: 0px; */

}

.login {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: black;
    line-height: normal;
    z-index: 14;
}

.link {
    color: #68945c;
    cursor: pointer;
}

.link:hover {
    color: #92cf81;
}

.form>span {
    float: right;
    margin-left: 30px;
    margin-right: 30px;
}

.subbtn {
    cursor: pointer;
    display: block;
    width: 250px;
    margin: auto;
    margin-top: 100px;
    outline: none;
    border: none;
    border-radius: 20px;
    height: 40px;
    background-color: #7eb070;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
}

.subbtn:hover {
    background-color: #98d787;
}

.shake {
    animation: shake 0.5s ease normal;
}

.leave {
    animation: move-leave 1s ease normal;
}

.enter {
    animation: move-enter 1s ease normal;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        transform: translateX(-5px);

    }

    20%,
    40%,
    60%,
    80% {
        transform: translateX(5px);
    }
}

@keyframes move-leave {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(200px);
        opacity: 0;
    }
}

@keyframes move-enter {
    0% {
        transform: translateX(-200px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>