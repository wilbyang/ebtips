'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngSanitize']).
  controller('MyCtrl1', ['$scope', function($scope) {

    $scope.entries = [
      {
        0: "Bob",
        1: "bob@bob.com",
        2: "如何评价大卫·斯特恩？",
        3: "<strong>节日</strong>必备之 Mac Game：BombSquad。 Chopper 2、FIFA、Real Racing 等不少游戏都支持将 iPhone 虚拟成手柄来控制，但它们总会让你产生扔掉 iPhone 去换个真手柄的冲动：iPhone 肯定没有手柄好用，于是新鲜之余游戏体验并没有实质提升，反而被蹩脚的操作拖了后腿。 有什么事情会是手柄做不到，却能通过移动设备满足的呢？「同屏多人游戏」可能是一个好答案：你不太可能在一台主机上插上 8 个手柄，再分别交到 8 位朋友手里；但「请大家坐在一起掏出自己的 iPhone / Android 并连上我家的 Wi-Fi」，这事儿就容易多了。 BombSquad 的游戏规则很简单，向朋友推荐时可以说像当年红白机上的《炸弹人》：扔炸弹炸飞别人，同时别被炸弹炸飞就行。独特之处在于，最多支持 8 个玩家同屏互相殴打：没那么多键盘手柄没关系，只要每人掏出自己的智能手机就行：每台手机都是一个「手柄」。 节日必备之 Mac Game：BombSquad。 Chopper 2、FIFA、Real Racing 等不少游戏都支持将 iPhone 虚拟成手柄来控制，但它们总会让你产生扔掉 iPhone 去换个真手柄的冲动：iPhone 肯定没有手柄好用，于是新鲜之余游戏体验并没有实质提升，反而被蹩脚的操作拖了后腿。 有什么事情会是手柄做不到，却能通过移动设备满足的呢？「同屏多人游戏」可能是一个好答案：你不太可能在一台主机上插上 8 个手柄，再分别交到 8 位朋友手里；但「请大家坐在一起掏出自己的 iPhone / Android 并连上我家的 Wi-Fi」，这事儿就容易多了。 BombSquad 的游戏规则很简单，向朋友推荐时可以说像当年红白机上的《炸弹人》：扔炸弹炸飞别人，同时别被炸弹炸飞就行。独特之处在于，最多支持 8 个玩家同屏互相殴打：没那么多键盘手柄没关系，只要每人掏出自己的智能手机就行：每台手机都是一个「手柄」。 节日必备之 Mac Game：BombSquad。 Chopper 2、FIFA、Real Racing 等不少游戏都支持将 iPhone 虚拟成手柄来控制，但它们总会让你产生扔掉 iPhone 去换个真手柄的冲动：iPhone 肯定没有手柄好用，于是新鲜之余游戏体验并没有实质提升，反而被蹩脚的操作拖了后腿。 有什么事情会是手柄做不到，却能通过移动设备满足的呢？「同屏多人游戏」可能是一个好答案：你不太可能在一台主机上插上 8 个手柄，再分别交到 8 位朋友手里；但「请大家坐在一起掏出自己的 iPhone / Android 并连上我家的 Wi-Fi」，这事儿就容易多了。 BombSquad 的游戏规则很简单，向朋友推荐时可以说像当年红白机上的《炸弹人》：扔炸弹炸飞别人，同时别被炸弹炸飞就行。独特之处在于，最多支持 8 个玩家同屏互相殴打：没那么多键盘手柄没关系，只要每人掏出自己的智能手机就行：每台手机都是一个「手柄」。 节日必备之 Mac Game：BombSquad。 Chopper 2、FIFA、Real Racing 等不少游戏都支持将 iPhone 虚拟成手柄来控制，但它们总会让你产生扔掉 iPhone 去换个真手柄的冲动：iPhone 肯定没有手柄好用，于是新鲜之余游戏体验并没有实质提升，反而被蹩脚的操作拖了后腿。 有什么事情会是手柄做不到，却能通过移动设备满足的呢？「同屏多人游戏」可能是一个好答案：你不太可能在一台主机上插上 8 个手柄，再分别交到 8 位朋友手里；但「请大家坐在一起掏出自己的 iPhone / Android 并连上我家的 Wi-Fi」，这事儿就容易多了。 BombSquad 的游戏规则很简单，向朋友推荐时可以说像当年红白机上的《炸弹人》：扔炸弹炸飞别人，同时别被炸弹炸飞就行。独特之处在于，最多支持 8 个玩家同屏互相殴打：没那么多键盘手柄没关系，只要每人掏出自己的智能手机就行：每台手机都是一个「手柄」。"
      },
      {
        0: "Joe",
        1: "joe@bob.com",
        2: "Title Title Title",
        3: "Content content. Content content. Content content."
      },
      {
        0: "\u9759\u6c34\u6df1\u6d41",
        1: "\u70ed\u7231\u7f8e\u98df\u7684\u7a0b\u5e8f\u5458\uff5e",
        2: "有没有把 Mac 当作主机，iPhone 当作控制设备的游戏？",
        3: "无论是出于道德感、同情心、或者政客对选票的争取，<b>对弱势群体的倾斜</b>往往起到反效果。<br><br>例如对待少数民族的「<a href=\"http://zh.wikipedia.org/zh-sg/%E5%85%A9%E5%B0%91%E4%B8%80%E5%AF%AC\" class=\" wrap external\" target=\"_blank\" rel=\"nofollow\">两少一宽<i class=\"icon-external\"></i></a>」政策，很大程度上加剧了民族矛盾。<br><br>又比如政府承诺提高穷人的福利保障，提供免费医疗，设定最低工资保障等等。可其实羊毛出在羊身上，富人不堪税负，干脆把企业开到海外，穷人们这下连工作都没了。<br><br>再如这条关于廉租房的讨论：<a href=\"http://www.zhihu.com/question/22588487\" class=\"internal\">茅于轼「廉租房不应该配厕所」的经济学逻辑是怎样的？</a>茅于轼为这个观点挨了多少骂？那些骂他的人，没几个是坏人，他们大多怀着善意，觉得穷人应该过上好日子。<br><br>殊不知，通往地狱的道路往往是由善意铺就的。<br><br>每当看到左翼运动（女权、少数族裔、工运、学运等等）的诉求从「平权」迈向「特权」时，我们就要警惕了。"
      }
    ]

    $scope.selectedIndex = 0;

    $scope.itemClicked = function ($index) {
      $scope.selectedIndex = $index;

      $scope.author = $scope.entries[$index][0];
      $scope.title = $scope.entries[$index][2];
      $scope.content = $scope.entries[$index][3];
      // console.log($index);
    }

    $scope.author = $scope.entries[0][0];
    $scope.title = $scope.entries[0][2];
    $scope.content = $scope.entries[0][3];

    // $scope.setEntry = function(entry) {
    //   $scope.author = entry[0];
    //   $scope.title = entry[2];
    //   $scope.content = entry[3];
    // };

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);