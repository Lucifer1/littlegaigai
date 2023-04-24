<template>
  <div class="detail-wrapper">
    <div class="tips-wrapper">
      <div class="tips">
        我们一起来看一个笑话哈哈哈哈哈哈
      </div>
      <img class="vip-icon" src="/img/notice-icon.png" alt="">
    </div>
    <div class="header-wrapper">
      <img class="header-img" :src="cardBackground" alt="">
    </div>
    <div class="desc">
      <p>一个笑话：</p>
      <p>{{ beforeVipDesc }}<span class="vip-desc">{{ specialDesc }}</span>{{ afterVipDesc }}</p>
      <div class="send-info">
        <div class="user-name">
          {{ nickName }}
        </div>
        <div class="send-time">
          {{ sendTime }}
        </div>
      </div>
    </div>
    <div class="channel-wrapper">
      <div class="channel-title">
        选择分享方式
      </div>
      <div class="channel-content">
        <div v-for="(item, index) in shareChannelList" :key="index" class="channel-item" @click="shareAsImage(item)">
          <img class="channel-icon" :src="item.imgUrl" alt="">
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="rule-wrapper">
      <p>
        看笑话须知
      </p>
      <p>1. 所有的笑话都是为了娱乐和消遣，不要把它们当成严肃的话题或攻击别人的方式。</p>
      <p>2. 笑话中可能会包含一些幽默或讽刺的元素，请不要把它们当成现实生活中的真相或是对任何人的侮辱。</p>
      <p>3. 某些笑话可能不适合所有人，特别是那些可能包含敏感话题的笑话，请在选择分享时注意观众。</p>
      <p>4. 最重要的是，享受这些笑话并让它们带给你和你的朋友们快乐和欢笑。</p>
    </div>
    <!-- <ShareModal ref="shareModal" :shareUrl="shareUrl" :headerUrl="cardBackground" :desc="desc" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/Utils'

const cardBackground = ref('/img/header-demo.jpeg')
const desc = ref('有个人在厕所里思考人生，他突然想起一个问题：“为什么在厕所里做决定总是那么顺利？”他猛然意识到所有的数都是1，因为他们都是“排”数。他笑了笑，觉得这个笑话很有意思，于是他决定和他的朋友分享这个笑话。他把这个笑话告诉了他的朋友们，大家都笑了起来。这个简单又幽默的笑话成为了他们之间的流行语，每次提到厕所，他们都会想起这个笑话。')
const specialDesc = ref('觉得这个笑话很有意思')
const beforeVipDesc = desc.value?.split(specialDesc.value)[0]
const afterVipDesc = desc.value?.split(specialDesc.value)[1]
const nickName = ref('Lightman')
const sendTime = ref(formatDate(new Date(), 'YYYY.MM.DD'))


const shareChannelList = [
  { imgUrl: '/img/wx.png', name: '微信', type: 'wechat' },
  { imgUrl: '/img/moment.png', name: '朋友圈', type: 'moments' },
  { imgUrl: '/img/poster.png', name: '生成海报', type: 'poster' }
]

const shareAsImage = async (item: any) => {
  console.log('>>>', 'share')
}
</script>

<style scoped>
.detail-wrapper {
  overflow: auto;
}

.tips-wrapper {
  display: flex;
  align-items: center;
  margin: 32px 48px;
}

.tips {
  display: inline-block;
  padding: 6px;
  height: 48px;
  font-size: 28px;
  color: #FE7801;
  background: #FFF8E7;
  border-radius: 8px;
  line-height: 48px;
}

.vip-icon {
  display: inline-block;
  margin-left: 8px;
  width: 45px;
  height: 45px;
}

.expired {
  margin: 48px;
  font-size: 40px;
  text-align: center;
  color: #2A2626;
  font-weight: 500;
  line-height: 56px;
}

.header-wrapper {
  position: relative;
}

.header-img {
  display: block;
  margin: 0 48px 40px;
  width: calc(100% - 96px);
}

.header-icon {
  position: absolute;
  top: -50px;
  right: 0;
  width: 144px;
  height: 144px;
}

.desc {
  padding: 0 48px;
  font-size: 32px;
  color: #272727;
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 476px 350px;
  line-height: 70px;
  background-image: url("/img/desc-bg.png");
}

.vip-desc {
  color: #EDAA45;
}

.send-info {
  margin-top: 23px;
  text-align: right;
}

.user-name {
  font-size: 28px;
  line-height: 40px;
  color: #272727;
}

.send-time {
  margin-top: 8px;
  font-size: 24px;
  color: #909090;
  line-height: 32px;
}

.channel-wrapper {
  margin: 0 48px;
}

.channel-title {
  margin: 32px 0;
  width: 100%;
  font-size: 32px;
  text-align: center;
  color: #272727;
  line-height: 44px;
  font-weight: 500;
}

.channel-content {
  display: flex;
  justify-content: space-around;
}

.channel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.channel-icon {
  margin-bottom: 16px;
  width: 88px;
}

.rule-wrapper {
  margin: 64px 48px 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  color: #909090;
}

.rule-wrapper p {
  margin-bottom: 20px;
}
</style>
