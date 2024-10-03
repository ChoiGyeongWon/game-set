# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Set란
게임 구성
81장의 카드로 구성되어 있습니다.
각 카드는 3가지 속성으로 구분됩니다:
모양: 동그라미, 세모, 네모
색상: 빨강, 초록, 보라
수량: 1개, 2개, 3개

게임 목표
세 장의 카드가 "Set"을 이루는 것을 찾는 것이 목표입니다. "Set"은 다음의 조건을 모두 만족해야 합니다:
각 속성(모양, 색상, 수량)이 모두 같거나 모두 다를 것.

게임 진행
카드 배치: 게임 시작 시 테이블에 12장의 카드를 엽니다.
카드 선택: 플레이어들은 카드 중에서 "Set"을 찾아내야 합니다. "Set"을 찾으면 그 카드를 가져오고 새로운 카드를 3장 뽑아 추가합니다.
게임 종료: 카드가 다 떨어지거나 더 이상 "Set"을 만들 수 없을 때 게임이 종료g됩니다. 가장 많은 "Set"을 찾은 플레이어가 승리합니다.

추가 규칙
카드가 세트인지 아닌지에 대해 의문이 있을 경우, 다른 플레이어들이 판단할 수 있습니다.
모든 플레이어가 동시에 카드를 찾기 때문에, 빠른 반응이 중요합니다!

# 기능
1. 처음 보드게임에 정답 1세트는 무조건 있을 것.
2. 게임보드에 정답이 없다면 자동 카드뽑기.
3. 정답을 맞춘다면 자동으로 카드 3장 뽑기.
4. 힌트 : 게임보드의 정답 중 1번째 세트 중 1개의 카드만 active 주기.
5. 카드뽑기 : 게임보드에 정답이 있다면 비활성화
6. 종료조건 : 더이상 뽑을 수 있는 카드가 없고 보드에 정답이 없는 경우.