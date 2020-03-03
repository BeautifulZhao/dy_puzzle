<template>
  <div class="box">
    <ul class="puzzle-wrap">
      <li v-for="(puzzle, index) in puzzles" 
      :key="index"
      v-text="puzzle"
      :class="{'puzzle': true, 'puzzle-empty': !puzzle}"
      @click="moveFn(index)">
      </li>
    </ul>
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

    // 移动方法
    moveFn(index) {
      // 获取点击位置及其上下左右的值
      let curNum = this.puzzles[index],
          topNum = this.puzzles[index - 3],
          bottomNum = this.puzzles[index + 3],
          leftNum = this.puzzles[index - 1],
          rightNum = this.puzzles[index + 1];
      // 如果左侧为空，和左侧交换位置
      if(leftNum === '') {
        this.$set(this.puzzles, index - 1, curNum)
        this.$set(this.puzzles, index, '')
      } else if(rightNum === '') {
        this.$set(this.puzzles, index + 1, curNum)
        this.$set(this.puzzles, index, '')
      } else if(topNum === '') {
        this.$set(this.puzzles, index -3, curNum)
        this.$set(this.puzzles, index, '')
      } else if(bottomNum === '') {
        this.$set(this.puzzles, index + 3, curNum)
        this.$set(this.puzzles, index, '')
      }
      this.passFn();
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
  font-size: 20px;
  background-color: #f90;
  text-align: center;
  line-height: 100px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 4px;
  cursor: pointer;
}

.puzzle-empty {
  background: #ccc;
  box-shadow: inset 2px 2px 18px;
}
</style>