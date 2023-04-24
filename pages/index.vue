<template>
  <div class="overflow-auto">
    <div class="flex items-center mx-32 my-48">
      <div
        class="inline-block h-48 p-6 text-28 text-[#fe7801] bg-[#fff8e7] rounded-8 leading-48"
      >
        我们一起来看一个笑话哈哈哈哈哈哈
      </div>
      <img
        class="inline-block ml-8 w-45 h-45"
        src="/img/notice-icon.png"
        alt=""
      />
    </div>
    <div class="relative">
      <img
        class="block mt-0 mb-40 mx-48 w-654 rounded-32"
        :src="cardBackground"
        alt=""
      />
    </div>
    <div
      class="desc px-48 py-0 text-32 leading-70 text-[#272727] bg-top-right bg-no-repeat bg-[url('/img/desc-bg.png')]"
    >
      <p>一个笑话：</p>
      <p>
        {{ beforeVipDesc }}<span class="text-[#edaa45]">{{ specialDesc }}</span
        >{{ afterVipDesc }}
      </p>
      <div class="mt-23 text-right">
        <div class="text-28 leading-40 text-[#272727]">
          {{ nickName }}
        </div>
        <div class="mt-8 text-24 text-[#909090] leading-32">
          {{ sendTime }}
        </div>
      </div>
    </div>
    <div class="mx-48 my-0">
      <div
        class="mx-0 my-32 w-[100%] text-32 text-center text-[#272727] leading-44 font-medium"
      >
        选择分享方式
      </div>
      <div class="flex justify-around">
        <div
          v-for="(item, index) in shareChannelList"
          :key="index"
          class="flex flex-col justify-center items-center"
          @click="shareAsImage(item)"
        >
          <img class="mb-16 w-88" :src="item.imgUrl" alt="" />
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="mt-64 mx-48 mb-0 text-24 font-medium">
      <p class="mb-20">看笑话须知</p>
      <p class="mb-20">
        1.
        所有的笑话都是为了娱乐和消遣，不要把它们当成严肃的话题或攻击别人的方式。
      </p>
      <p class="mb-20">
        2.
        笑话中可能会包含一些幽默或讽刺的元素，请不要把它们当成现实生活中的真相或是对任何人的侮辱。
      </p>
      <p class="mb-20">
        3.
        某些笑话可能不适合所有人，特别是那些可能包含敏感话题的笑话，请在选择分享时注意观众。
      </p>
      <p class="mb-20">
        4. 最重要的是，享受这些笑话并让它们带给你和你的朋友们快乐和欢笑。
      </p>
    </div>
    <!-- <ShareModal ref="shareModal" :shareUrl="shareUrl" :headerUrl="cardBackground" :desc="desc" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/Utils'

const cardBackground = ref('/img/header-demo.jpeg')
const desc = ref(
  '有个人在厕所里思考人生，他突然想起一个问题：“为什么在厕所里做决定总是那么顺利？”他猛然意识到所有的数都是1，因为他们都是“排”数。他笑了笑，觉得这个笑话很有意思，于是他决定和他的朋友分享这个笑话。他把这个笑话告诉了他的朋友们，大家都笑了起来。这个简单又幽默的笑话成为了他们之间的流行语，每次提到厕所，他们都会想起这个笑话。'
)
const specialDesc = ref('觉得这个笑话很有意思')
const beforeVipDesc = desc.value?.split(specialDesc.value)[0]
const afterVipDesc = desc.value?.split(specialDesc.value)[1]
const nickName = ref('Lightman')
const sendTime = ref(formatDate(new Date(), 'YYYY.MM.DD'))

const shareChannelList = [
  { imgUrl: '/img/wx.png', name: '微信', type: 'wechat' },
  { imgUrl: '/img/moment.png', name: '朋友圈', type: 'moments' },
  { imgUrl: '/img/poster.png', name: '生成海报', type: 'poster' },
]

const shareAsImage = async (item: any) => {
  console.log('>>>', 'share')
}
</script>

<style scoped>
.desc {
  background-size: 476px 350px;
}
</style>
