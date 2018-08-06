<template>
    <div class="indexfloor1">
        <div class="indexfloor1-hd">{{floorTitle}}</div>
        <div class="indexfloor1-bd clearfix">
            <div class="indexfloor1-bd-fr">
                <div class="indexfloor1-con2">
                    <a :href="floorData0.href"><img :src="floorData0.image" /></a>
                </div>
                <div class="indexfloor1-con3">
                    <a :href="floorData1.href"><img :src="floorData1.image" /></a>
                </div>
            </div>
            <div class="indexfloor1-bd-fl indexfloor1-con1">
                <a :href="floorData2.href" ><img :src="floorData2.image" /></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['floorData','floorTitle'],
    data() {
        return {
            floorData0: {},
            floorData1: {},
            floorData2: {}
        }
    },
    created: function() {
        this.floorData0 = this.floorData[0]
        this.floorData1 = this.floorData[1]
        this.floorData2 = this.floorData[2]
    }
}
</script>

<style lang="scss" scoped>
.indexfloor1 {
    margin-top: 20px;
    .indexfloor1-hd {
        height: .8rem;
        line-height: .8rem;
        font-size: 18px;
        margin-bottom: 10px;
        padding-left: 10px;
    }
    .indexfloor1-bd-fl {
        float: left;
        width: 40%;
    }
    .indexfloor1-bd-fr {
        float: left;
        width: 60%;
    }
    img {
        width: 100%;
    }
}
</style>