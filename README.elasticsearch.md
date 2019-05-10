# elasticsearch-utils

elasticsearch 관리에 있어서 유용한 cli 도구를 제작할 예정입니다.

# 이전 버전의 소스코드
- 이전의 스크립트 들은 hoian-webapp에서 elastic docker container가 이용하고 있었습니다.
- 이전의 스크립트 들은 `docs/legacy`에 몰아 넣어 두었습니다.

# CLI Documents

1. mecab 의 사용자 사전을 Nori 포맷의 사용자 사전으로 바꾸고 싶을 때

```
daangn-es mecab2nori -f ./resources/input-daangn-mecab-dict.csv -o {OUTPUT_PATH(optional)}
```

