<template>
  <div class="box">
    <ul class="puzzle-wrap">
      <li v-for="(puzzle, index) in puzzles" 
      :key="index"
      :class="{'puzzle': true, 'puzzle-empty': !puzzle}"
      @click="moveFn(index, puzzle)"
      >
      <canvas width="100px" height="100px" :id="'canvas' + puzzle"></canvas>
      </li>
    </ul>
    <!-- load事件的添加为了，保证图片可以正确的渲染到canvas上 -->
    <img src="../assets/dy_full.png" id="imgs" style="display:none" @load="showImage">
    <button
    class="reset"
    @click="reset"
    >重新开始</button>
  </div>
</template>

<script>

export default {
  data(){
    return { 
      puzzles: []
    }
  },
  methods: {
    reset(){
      this.reRender();
      let _this = this;
      // DOM 更新之后即puzzles数组更新之后，canvasid更新之后，再去绘制图片
      this.$nextTick(function(){
        _this.showImage();
      })
      
      // 清除右下角
      let blankImg = document.querySelector('li:last-child canvas')
      let ctx = blankImg.getContext('2d');
      ctx.clearRect(0, 0, 100, 100)    
    },
    reRender() {
      let puzzleArr = [];

      for(let i = 1; i < 9; i++) {
        puzzleArr.push(i);
      }

      // 随机打乱数组
      puzzleArr = puzzleArr.sort(() => {
        return Math.random() - 0.5;
      })

      // 判断数组是否可以复原
      let count = this.computedReverseNum(puzzleArr)
      console.log(count);
      if(count % 2 === 0) {
        // 页面显示
        this.puzzles = puzzleArr;
        this.puzzles.push('');
      } else {
        // 重新初始化
        this.reRender();
      }
      
    },

    // 图片显示
    showImage() {
      // 图像切割
      let image = document.querySelector('#imgs')
      let k = 1;
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++){
          let canvas = document.querySelector("#canvas" + k++)
          if(canvas) {
            let ctx = canvas.getContext("2d");
              ctx.drawImage(image, j * 100, i * 100, 100, 100, 0, 0, 100, 100)
          }
        }
      }
    },

    // 移动方法
    moveFn(index, puzzle) {
      // 获取点击位置及其上下左右的值
      let curNum = this.puzzles[index],
          topNum = this.puzzles[index - 3],
          bottomNum = this.puzzles[index + 3],
          leftNum = this.puzzles[index - 1],
          rightNum = this.puzzles[index + 1];
      // 如果左侧为空，和左侧交换位置
      
      let ischange = false;
      if(leftNum === '') {
        this.$set(this.puzzles, index - 1, curNum)
        this.$set(this.puzzles, index, '')
        ischange = true;
      } else if(rightNum === '') {
        this.$set(this.puzzles, index + 1, curNum)
        this.$set(this.puzzles, index, '')
        ischange = true;
      } else if(topNum === '') {
        this.$set(this.puzzles, index -3, curNum)
        this.$set(this.puzzles, index, '')
        ischange = true;
      } else if(bottomNum === '') {
        this.$set(this.puzzles, index + 3, curNum)
        this.$set(this.puzzles, index, '')
        ischange = true;
      }
      if(ischange) {
        let clickImg = document.querySelector('#canvas' + puzzle);
        let blankImg = document.querySelector('#canvas')
        let ctx0 = clickImg.getContext('2d');
        let ctx1 = blankImg.getContext('2d');
        ctx1.drawImage(clickImg, 0, 0);
        ctx0.clearRect(0, 0, 100, 100)
        this.passFn();
      }
    },

    // 判断成功
    passFn() {
      if(this.puzzles[this.puzzles.length - 1] === '') {
        let puzzleArr = this.puzzles.slice(0, this.puzzles.length - 1);
        const isOK = puzzleArr.every((val, index) => val === index + 1);
        if(isOK) {
          setTimeout(()=> alert('*-*党艳真棒*-*'), 20)  
        }
      }
    },
    // 计算排列的逆序数，保证图片可以复原
    // 排列的逆序数的奇偶性相同就可以复原
    computedReverseNum(arr) {
      if(arr) {
        let count = 0;
        for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    count ++
                }
            }
        }
        return count
      }
    }
  },
  created() {
    this.reRender();
  }
}
</script>

<style>
.box {
  width: 306px;
  margin: 50px auto 0;
}

.puzzle-wrap {
  width: 306px;
  background: #ccc;
  height: 306px;
  list-style: none;
  padding: 0;
}

.puzzle {
  width: 100px;
  height:100px;
  float: left;
  font-size: 40px;
  color: white;
  text-align: center;
  line-height: 100px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 4px;
  cursor: pointer;
  /* opacity: 0.3; */
}

.puzzle-empty {
  background: #ccc;
  box-shadow: inset 2px 2px 18px;
}

.reset {
  background-color: rgb(120, 112, 185);
  color: #ffffff;
  width: 300px;
  font-size: 20px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
}
</style>