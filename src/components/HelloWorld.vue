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
      puzzles: [],
      imgURL: require('../assets/dy_full.png')
    }
  },
  methods: {
    reset(){
      this.reRender();
      this.showImage();
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

      // 页面显示
      this.puzzles = puzzleArr;
      this.puzzles.push('');
    },

    // 图片显示
    showImage() {
      // 图像切割
      let image = new Image();
      console.log(this.imgURL)
      image.src = this.imgURL;
      let k = 1;
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++){
          let canvas = document.querySelector("#canvas" + k++)
          if(canvas) {
            let ctx = canvas.getContext("2d");
            // 将js线程挂起。让gui线程执行。
            setTimeout(() => {
              ctx.drawImage(image, j * 100, i * 100, 100, 100, 0, 0, 100, 100)
            }, 50)
          }
        }
      }
      setTimeout(function() {
        let blankImg = document.querySelector('#canvas')
        let ctx = blankImg.getContext('2d');
        ctx.clearRect(0, 0, 100, 100)
      }, 1)
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
    }
  },
  created() {
    this.reRender();
  },
  mounted() {
    this.showImage();
  },
  destroyed() {
    this.reset();
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
  background-color: #f90;
  color: #ffffff;
  width: 300px;
  font-size: 20px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
}
</style>