import { Component, OnInit } from '@angular/core';

type Award = {
  name: string;
  probability: number;
  goal: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public hints = [
    {
      text: '1% 的轉蛋抽個 100 次，還是有4成的人抽不到？？？',
      left: 20,
      top: 0,
    },
    {
      text: '手遊抽 2,500 次沒中虛寶，是運氣不好還是機率造假？',
      left: 30,
      top: 10,
    },
    { text: '一抽入魂', left: 80, top: 32 },
    { text: '機率到底怎麼算？', left: 41, top: 24 },
    { text: '又是 R 卡啊啊啊啊啊啊～～', left: 23, top: 80 },
    { text: '我到底還要不要抽下去？', left: 82, top: 20 },
    { text: '不！我破產了', left: 80, top: 80 },
    { text: '回本啦！', left: 12, top: 85 },
    { text: '人品爆發', left: 90, top: 50 },
    { text: '不氪個萬把塊，怎麼好意思抱怨抽不到角色？', left: 10, top: 60 },
    { text: '我始終相信我的牌組！！', left: -3, top: 20 },
    { text: '卡片是有靈魂的', left: 14, top: 35 },
    { text: '好好地感受神的憤怒吧!', left: 60, top: 70 },
  ];
  public fakeNames = [
    '妙蛙種子',
    '妙蛙草',
    '妙蛙花',
    '小火龍',
    '火恐龍',
    '噴火龍',
    '傑尼龜',
    '卡咪龜',
    '水箭龜',
    '綠毛蟲',
    '鐵甲蛹',
    '巴大蝶',
    '獨角蟲',
    '鐵殼蛹',
    '大針蜂',
    '波波',
    '比比鳥',
    '大比鳥',
    '小拉達',
    '拉達',
    '烈雀',
    '大嘴雀',
    '阿柏蛇',
    '阿柏怪',
    '皮卡丘',
    '雷丘',
    '穿山鼠',
    '穿山王',
    '尼多蘭',
    '尼多娜',
    '尼多后',
    '尼多朗',
    '尼多力諾',
    '尼多王',
    '皮皮',
    '皮可西',
    '六尾',
    '九尾',
    '胖丁',
    '胖可丁',
    '超音蝠',
    '大嘴蝠',
    '走路草',
    '臭臭花',
    '霸王花',
    '派拉斯',
    '派拉斯特',
    '毛球',
    '摩魯蛾',
    '地鼠',
    '三地鼠',
    '喵喵',
    '貓老大',
    '可達鴨',
    '哥達鴨',
    '猴怪',
    '火爆猴',
    '卡蒂狗',
    '風速狗',
    '蚊香蝌蚪',
    '蚊香君',
    '蚊香泳士',
    '凱西',
    '勇基拉',
    '胡地',
    '腕力',
    '豪力',
    '怪力',
    '喇叭芽',
    '口呆花',
    '大食花',
    '瑪瑙水母',
    '毒刺水母',
    '小拳石',
    '隆隆石',
    '隆隆岩',
    '小火馬',
    '烈焰馬',
    '呆呆獸',
    '呆殼獸',
    '小磁怪',
    '三合一磁怪',
    '大蔥鴨',
    '嘟嘟',
    '嘟嘟利',
    '小海獅',
    '白海獅',
    '臭泥',
    '臭臭泥',
    '大舌貝',
    '刺甲貝',
    '鬼斯',
    '鬼斯通',
    '耿鬼',
    '大岩蛇',
    '催眠貘',
    '引夢貘人',
    '大鉗蟹',
    '巨鉗蟹',
    '霹靂電球',
    '頑皮雷彈',
    '蛋蛋',
    '椰蛋樹',
    '卡拉卡拉',
    '嘎啦嘎啦',
    '飛腿郎',
    '快拳郎',
    '大舌頭',
    '瓦斯彈',
    '雙彈瓦斯',
    '獨角犀牛',
    '鑽角犀獸',
    '吉利蛋',
    '蔓藤怪',
    '袋獸',
    '墨海馬',
    '海刺龍',
    '角金魚',
    '金魚王',
    '海星星',
    '寶石海星',
    '魔牆人偶',
    '飛天螳螂',
    '迷唇姐',
    '電擊獸',
    '鴨嘴火獸',
    '凱羅斯',
    '肯泰羅',
    '鯉魚王',
    '暴鯉龍',
    '拉普拉斯',
    '百變怪',
    '伊布',
    '水伊布',
    '雷伊布',
    '火伊布',
    '多邊獸',
    '菊石獸',
    '多刺菊石獸',
    '化石盔',
    '鐮刀盔',
    '化石翼龍',
    '卡比獸',
    '急凍鳥',
    '閃電鳥',
    '火焰鳥',
    '迷你龍',
    '哈克龍',
    '快龍',
    '超夢',
    '夢幻',
  ];

  public sameProbability = true;

  public cost = 60;

  public quantity = 1;

  public awards: Award[] = [];

  public remainingProbability = 100;

  public currentCost = 0;

  public currentCount = 0;

  public currentAchievementProbability = 0;

  public targetAchievementProbability = 0;

  public step: number = 0;

  public targetAwardList: string = '';

  public series: { name: string; value: number }[] = [];

  public results: {
    name: string;
    series: { name: string; value: number }[];
  }[] = [{ name: '機率', series: this.series }];

  public table: {
    threshold: number;
    comment: string;
    probability?: number;
    cost?: number;
    count?: number;
  }[] = [
    { threshold: 0.2, comment: '神一般的人' },
    { threshold: 0.4, comment: '運氣不錯的人' },
    { threshold: 0.5, comment: '一般人' },
    { threshold: 0.6, comment: '運氣較差的人' },
    { threshold: 0.8, comment: '非洲人' },
  ];

  public view: [number, number] = [700, 400];

  public ngOnInit(): void {
    this.sameProbability = false;
    this.awards.push({
      name: '',
      probability: 1,
      goal: true,
    });
    this.awards.push({
      name: '',
      probability: 1,
      goal: true,
    });
    this.awards.push({
      name: '',
      probability: 1,
      goal: true,
    });
    this.awards.push({
      name: '',
      probability: 1,
      goal: false,
    });
    this.awards.push({
      name: '',
      probability: 1,
      goal: false,
    });
    this.awards.push({
      name: '',
      probability: 1,
      goal: false,
    });
    this.onProbabilityChanged();
  }

  public addAward() {
    this.awards.push({
      name: '',
      probability: 0,
      goal: false,
    });
  }

  public removeAward(award: Award) {
    const index = this.awards.indexOf(award);
    if (index === -1) return;
    this.awards.splice(index, 1);
    this.onProbabilityChanged();
  }

  public averageProbability(awards: Award[]) {
    const probability = 100 / awards.length;
    awards.map((award) => (award.probability = probability));
  }

  public onProbabilityChanged() {
    const total = this.awards.reduce(
      (prev, award) => prev + award.probability,
      0
    );

    this.remainingProbability = 100 - total;
  }

  public async next(step: number) {
    if (this.step < step) {
      this.step = step;
    }
    await this.delay(1);
    window.scrollTo({
      left: 0,
      top: document.body.clientHeight * step,
      behavior: 'smooth',
    });
  }

  public async calculate() {
    this.targetAchievementProbability = 0.8;
    this.currentAchievementProbability = 0;
    this.currentCost = 0;
    this.currentCount = 0;

    this.view = [
      document.body.clientWidth * 0.8,
      Math.max(document.body.clientHeight - 400, 400),
    ];

    this.table.map((row) => (row.probability = 0));
    let row = 0;

    let current: Event[] = [
      {
        achieved: false,
        awardIndexes: [],
        probability: 1,
      },
    ];
    let next: Event[] = [];

    const awards = [...this.awards.map((award) => ({ ...award }))];

    if (this.sameProbability) {
      this.averageProbability(awards);
    } else {
      this.onProbabilityChanged();
      awards.push({
        name: '其他',
        probability: this.remainingProbability,
        goal: false,
      });
    }

    this.targetAwardList = awards
      .filter((award) => award.goal)
      .map((award) => awards.indexOf(award))
      .sort((a, b) => a - b)
      .join(',');

    this.series = [];
    this.results[0].series = this.series;

    while (true) {
      await this.delay(10);
      this.currentCost += this.cost;
      this.currentCount += this.quantity;

      for (let i = 0; i < this.quantity; i++) {
        await this.calculateNextEvent(current, awards, next);
        this.mergeSameResult(next);
        current = next;
        next = [];
      }

      this.currentAchievementProbability = current
        .filter((event) => event.achieved)
        .reduce((prev, event) => prev + event.probability, 0);

      this.series.push({
        name: this.currentCount.toString(),
        value: parseFloat(
          (this.currentAchievementProbability * 100).toFixed(2)
        ),
      });

      if (this.currentAchievementProbability >= this.table[row].threshold) {
        this.table[row].cost = this.currentCost;
        this.table[row].count = this.currentCount;
        this.table[row].probability = this.currentAchievementProbability;
        row++;
      }

      if (
        this.currentAchievementProbability >= this.targetAchievementProbability
      ) {
        break;
      }
    }

    this.results = [...this.results];
  }

  private async calculateNextEvent(
    currentRank: Event[],
    awards: Award[],
    nextRank: Event[]
  ) {
    let time = 0;
    for (let event of currentRank) {
      for (let awardIndex in awards) {
        const award = awards[awardIndex];

        let awardIndexes = [...event.awardIndexes];
        let achieved = event.achieved;

        if (!achieved) {
          if (award.goal) {
            if (awardIndexes.indexOf(parseInt(awardIndex, 10)) === -1) {
              awardIndexes.push(parseInt(awardIndex, 10));
              awardIndexes = awardIndexes.sort((a, b) => a - b);
              achieved = this.targetAwardList === awardIndexes.join(',');
            }
          }
        }

        const nextEvent = {
          achieved,
          awardIndexes,
          probability: (event.probability * award.probability) / 100,
        };

        nextRank.push(nextEvent);

        if (time++ == 10) {
          time = 0;
          await this.delay(1);
        }
      }
    }
  }

  private mergeSameResult(nextRank: Event[]) {
    for (let i = 0; i < nextRank.length; i++) {
      for (let j = i + 1; j < nextRank.length; j++) {
        if (
          nextRank[i].awardIndexes.join(',') ===
          nextRank[j].awardIndexes.join(',')
        ) {
          nextRank[i].probability += nextRank[j].probability;
          nextRank.splice(j, 1);
          j--;
        }
      }
    }
  }

  public async delay(ms: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

type Event = {
  achieved: boolean;
  probability: number;
  awardIndexes: number[];
};
