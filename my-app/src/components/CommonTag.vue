<template>
    <div class="tabs">
        <el-tag
            v-for="(item,index) in tags"
            :key="item.path"
            :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'"
            @click="changeMenu(item)" 
            @close="handleClose(item,index)"
            size="small"
            >
            {{ item.label }}
        </el-tag>
    </div >
</template>

<script>
import {mapState , mapMutations} from 'vuex'
export default{
    name:'CommonTag',
    data() {
        return{
        }
    },
    computed: {
        ...mapState ({
            tags:state => state.tab.tabsList
        })
    },
    methods: {
        ...mapMutations(['closeTag']), 
        //点击tag跳转功能
        changeMenu(item){
            // console.log(item);
            this.$router.push({ name: item.name }) 
        },
        //点击tag删除的功能
        handleClose(item,index){
            //调用store中的mutations 
            this.closeTag(item)
            const length = this.tags.length
            
            //删除之后的跳转逻辑
            //删除的项不是当前页面的项，直接返回
            if (item.name !== this.$route.name) {
                return
            }
            //表示的是删除最后一项
            //删除的项是最后，将前面一项的数据push上来，实现页面的跳转
            if (index === length) {
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            } else {
                this.$router.push({
                    name: this.tags[index].name
                })
            } 
        }
    }
}
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}

</style>