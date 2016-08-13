define(function () {
  /*
   * Using a random color generator presented awful colors and unpredictable color schemes.
   * So we needed to come up with a color scheme of our own that creates consistent, pleasing color patterns.
   * The order allows us to guarantee that 1st, 2nd, 3rd, etc values always get the same color.
   * Returns an array of 72 colors.
   *
   * 使用 http://www.herethere.net/~samson/php/color_gradient/ 产生渐变色。
   * 集中在人眼最敏感的蓝绿色系（http://cms.nyipcn.com/uploadfile/2014/0727/20140727113805928.jpg）
   *
   */


  return function SeedColorUtilService() {
    return [
      '#4377AA',
      '#4884AC',
      '#4E92AE',
      '#539FB0',
      '#59ADB2',

      '#5FBBB4',
      '#56B79E',
      '#4DB388',
      '#45AF73',
      '#3CAB5D',

      '#34A848',
      '#5AAF40',
      '#80B639',
      '#A6BD32',
      '#CCC42B',

      '#F3CB24',
      '#EAB323',
      '#E19B22',

      '#D98321',
      '#E58416',
      '#F2850B',

      '#FF8700',
      '#E0801E',
      '#C1793D',

      '#A2735C',
      '#BD6158',
      '#D84F54',

      '#F43D50',
      '#F7596C',
      '#FB7588',

      '#FF92A4',
      '#E887A3',
      '#D17CA2',

      '#BA72A2',
      '#9273A4',
      '#6A75A7'


    ];
  };
});
