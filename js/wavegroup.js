import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 3;
    // 몇 개의 포인트를 하나의 웨이브에 그릴 것인지 정의
    this.totalPoints = 6;
    this.color = [
      "rgb(255, 233, 138,0.4)",
      "rgb(247, 196, 87,0.4)",
      "rgb(215, 65, 119,0.4)",
    ];
    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      // 웨이브 1개만 테스트
      this.waves[i] = wave;
    }
  }

  // WaveGroup 안에 있는 전체 Wave(totalWaves)만큼 함수 실행
  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
