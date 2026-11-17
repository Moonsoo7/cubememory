// PROTOTYPE - NOT FOR PRODUCTION
// Question: (not set)
// Date: 2026-11-16
// 큐브게임의 튜닝 값. 게임은 tune.<이름>으로 매번 읽으므로, 슬라이더로 바꾸면 곧바로 적용된다.
// 기억 전용: 처음 몇 초 동안 결과물을 보여 준 뒤 큐브에 둘러싸인 블록을 깎는다. 줄어드는 제한 시간은 없다.
window.CONFIG = {
  // 둘러싼 큐브 수 = (cubes_first + (동물 번호-1) × cubes_step) × cubes_mult
  cubes_first: { value: 12, min: 4, max: 40, step: 1 },
  cubes_step: { value: 1.1, min: 0, max: 3, step: 0.1 },
  cubes_mult: { value: 3, min: 1, max: 6, step: 0.5 },        // 둘러싼 큐브를 몇 배로 쌓을지
  // 결과 동물을 이루는 큐브 수 = answer_first × (1 + answer_growth)^(우리 번호-1), cubes_cap 을 넘지 않는다
  answer_first: { value: 24, min: 8, max: 80, step: 1 },
  answer_growth: { value: 0.3, min: 0, max: 0.5, step: 0.01 },
  cubes_cap: { value: 3200, min: 300, max: 6000, step: 100 },
  // 기억과 다시 보기
  memory_show: { value: 3, min: 1, max: 10, step: 0.5 },      // 시작할 때 결과물을 보여 주는 시간(초)
  peek_show: { value: 3, min: 1, max: 10, step: 0.5 },        // 코인을 내고 다시 보는 시간(초)
  peek_cost: { value: 0.3, min: 0, max: 1, step: 0.05 },      // 다시 보기 값 = 이 판의 기본 코인(둘러싼 큐브 수) × 이 값
  // 맴도는 방해 동물과 성공 장면
  orbit_max: { value: 10, min: 0, max: 30, step: 1 },         // 한 판에 맴도는 동물 수의 상한
  orbit_speed: { value: 0.35, min: 0, max: 1.5, step: 0.05 }, // 맴도는 빠르기
  win_anim: { value: 1.8, min: 0.5, max: 5, step: 0.1 },      // 성공한 뒤 동물이 걷는 모습을 보여 주고 결과 화면이 뜨기까지(초)
  grow_step: { value: 0.1, min: 0, max: 0.3, step: 0.01 },   // 한 번 깰 때마다 지도에서 자라는 비율(10번까지)
  zoo_walk_speed: { value: 1, min: 0, max: 3, step: 0.1 },    // 지도에서 동물이 돌아다니는 빠르기


  // 콤보: 이전 탭과의 간격(초)
  combo_window: { value: 0.5, min: 0.2, max: 1.5, step: 0.05 },
  lightning_window: { value: 0.2, min: 0.05, max: 0.5, step: 0.05 },
  combo_cap: { value: 10, min: 1, max: 30, step: 1 },        // 콤보 보너스가 더 늘지 않는 연속 횟수
  lightning_mult: { value: 3, min: 1, max: 6, step: 1 },     // 번개 콤보 보너스 배수
  combo_auto_pop: { value: 1, min: 0, max: 3, step: 0.5 },   // 콤보 숫자 × 이 값만큼 주변 남는 큐브가 자동으로 터짐
  combo_auto_max: { value: 10, min: 0, max: 30, step: 1 },   // 한 번에 자동으로 터지는 최대 개수

  // 탭과 드래그 가르기
  tap_slop: { value: 32, min: 4, max: 64, step: 1 },          // 누른 자리에서 이만큼(픽셀) 벗어나야 돌리기로 본다. 마우스는 절반
  tap_time: { value: 0.7, min: 0.2, max: 2, step: 0.1 },      // 이 시간(초) 안에 떼면 탭


  // 화면·소리
  answer_split: { value: 0.34, min: 0.2, max: 0.5, step: 0.01 }, // 위 정답 영역이 차지하는 비율
  music_volume: { value: 0.05, min: 0, max: 0.2, step: 0.01 },
  music_tempo: { value: 128, min: 90, max: 170, step: 2 },       // 배경음악 빠르기(BPM)
  unlock_all: { value: 0, min: 0, max: 1, step: 1 },             // 1이면 잠금 없이 모든 상징물을 열어 둔다(시험용)
};
