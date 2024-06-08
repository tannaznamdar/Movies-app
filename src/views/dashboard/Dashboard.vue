<template>
    <div class="pt-150 container bv-example-row">
        <div class="row">
            <div class="col-lg-3">
                <div class="sidebar_dashboard">
                    <div class="side_head_dashboard">
                        <div class="inner_side_head_dashboard">
                            <div class="avatar_user_panel"> {{ avatar }} </div>
                        </div>
                        <span class="wellcome_message">کاربر گرامی ، <strong>خوش آمدید</strong></span>
                        <span class="user_name"> {{ userName }} </span>
                        <div class="btn_show_profile">
                            <router-link class="active" :to='{ name: "" }'> نمایش پروفایل
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-9">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',

    data() {
        return {
            userName: 'tannaz71',
            avatar: 'T'
        }
    }

}
</script>



<style scoped lang="scss">
.pt-150 {
    padding-top: 150px;

    @media (max-width:449px) {
        padding-top: 120px;
    }
}

.sidebar_dashboard {
    width: 100%;
    border-radius: 14px;
    background: #23232b;
    margin-top: 30px;
    overflow: hidden;
}

.inner_side_head_dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #6e7072;
    position: relative;
    text-align: center;
    width: 100%;
    height: 126px;
}

.avatar_user_panel {
    width: 89px;
    height: 89px;
    line-height: 93px;
    font-size: 250%;
    text-align: center;
    color: #fff;
    border-radius: 100%;
    background-color: #6898f8;
    box-shadow: 0 0 29px 0 rgba(88, 83, 167, 0.4);
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
}

.wellcome_message {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #fff;
    margin-top: 55px;
    font-size: 16px;
    font-weight: 300;
}

.sidebar_dashboard .side_head_dashboard .user_name {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #6898f8;
    margin-top: 5px;
    margin: 0;
}

.btn_show_profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 15px;

    a {
        text-decoration: none;
        font-size: 12px;
        display: inline-block;
        padding: 10px 15px;
        background: #050505;
        box-shadow: 0 0 10px rgba(0, 0, 0, .7);
        color: #fff;
        border-radius: 35px;
    }
}
</style>