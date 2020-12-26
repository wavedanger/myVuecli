<template>
    <div class="container">
        <el-row>
            <el-col :span="24">
                <el-input
                    class="s-input"
                    v-model="question"
                    placeholder="请输入问题"
                ></el-input>
                <el-button @click="askSaiDiaoAi" type="primary"
                    >咨询瞎搞AI</el-button
                >
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-input
                    class="s-input"
                    v-model="qq"
                    placeholder="请输入qq号"
                ></el-input>
                <el-button @click="getQQlevel" type="warning"
                    >获取qq等级</el-button
                >
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-input
                    class="s-input"
                    v-model="today"
                    placeholder="输入月日，如：1225"
                ></el-input>
                <el-button @click="getEventHistory" type="danger"
                    >历史上的今天</el-button
                >
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
            <pre class="code">
                {{ returnJSON }}
            </pre
                >
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { saidiaoai, qqlevel, eventHistory } from "../utlis/api";
export default {
    name: "apitest",
    data() {
        return {
            question: "",
            qq: "",
            today: "",
            returnJSON: "",
        };
    },
    mounted() {},
    methods: {
        askSaiDiaoAi() {
            let params = {
                key: "free",
                appid: 0,
                msg: this.question,
            };
            saidiaoai(params)
                .then((res) => {
                    this.returnJSON = JSON.stringify(res, null, 8);
                })
                .catch((err) => {
                    this.$message.error(err);
                });
        },
        getQQlevel() {
            let params = {
                qq: this.qq,
            };
            qqlevel(params).then((res) => {
                this.returnJSON = JSON.stringify(res, null, 8);
            });
        },
        getEventHistory() {
            let params = {
                monthday: this.today,
            };
            params = params.monthday ? params : {};
            eventHistory(params).then((res) => {
                this.returnJSON = JSON.stringify(res, null, 8);
                if (res.code == 200) {
                    this.$message.success(res.msg);
                } else {
                    this.$message.error(res.msg);
                }
            });
        },
    },
    components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    min-width: 480px;
}
.s-input {
    width: 180px;
}
ol {
    padding: 20px;
    text-align: left;
}
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
    border-radius: 4px;
}
.el-button {
    width: 120px;
    margin-left: 10px;
}
.code {
    text-align: left;
    text-indent: -6em;
    color: white;
    background-color: #252637;
    overflow: auto;
    width: 600px;
    height: 600px;
    margin: 0 auto;
    border-radius: 5px;
}
</style>
