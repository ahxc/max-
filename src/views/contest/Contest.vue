<template>
  <div id="contest">
    <Navbar>
      <div slot="center" class="logo">全部赛事</div>
    </Navbar>
    <Scroll class="wrapper" ref="scroll"
            :probeType="3" :pullUpLoad="true"
            :listLengthStatus="listLengthStatus"
            @pullingUps="getContestsGame"
            @scrollPostion="isShowBackTop">
      <ContestContent :ContestGame="ContestGame.list"/>
    </Scroll>
    <Backtop class="backtop" @itemclick="handleBackTop" v-show="backTopState"/>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar"
import Scroll from "../../components/common/scroll/Scroll"
import ContestContent from "./contestcamps/ContestContent"
import Backtop from "../../components/common/backtop/Backtop"
import {getContestsGame} from "../../network/contests"
import {$_backTop} from "../../utils/mixin"

export default {
  name: "Data",
  data() {
    return {
      ContestGame: {page: 0, list: []},
      listLengthStatus: false
    }
  },
  components: {
    Navbar,
    Scroll,
    ContestContent,
    Backtop
  },
  mixins: [$_backTop],
  created() {
    this.getContestsGame()
  },
  methods: {
    async getContestsGame() {
      const page = this.ContestGame.page+1
      await getContestsGame(page)
      .then(res=>{
        this.ContestGame.list.push(...res.results)
        this.listLengthStatus=!this.listLengthStatus
        this.ContestGame.page += 1})
      .catch(err=>{console.log(err)})
      this.$refs.scroll.finishPullUpHandler()
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 45px;
  bottom: 45px;
  right: 0px;
  left: 0px;
}

.logo {
  height: 100%;
  width: 100%;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
}

.backtop {
  position: fixed;
  right: 8px;
  bottom: 55px;
  width: 45px;
  height: 45px;
}
</style>