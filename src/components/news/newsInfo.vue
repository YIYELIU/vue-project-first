<template>

    <div class="newsinfo">
        <!-- 大标题 -->
        <h3 class="title">{{ newsContent.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsContent.add_time | dateFormat}}</span>
            <span>点击：{{ newsContent.click }}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsContent.content">

        </div>

        <!-- 评论区子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>

</template>

<script>
    // 导入子组件
    import comment from '../subcomponents/comment.vue'

    export default {
        data () {
            return {
                id: this.$route.params.id,
                newsContent: {}
            }
        },
        created () {
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo () {
                this.$http.get('api/getnew/' + this.id ).then(result => {
                    // console.log(result.body)
                    if (result.body.status === 0) {
                        this.newsContent = result.body.message[0]
                    } else {
                        Toast("获取数据失败")
                    }

                })
            }
        },
        components: {
            'comment-box': comment
        },
    }
</script>

<style lang="less">
    .newsinfo {
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
