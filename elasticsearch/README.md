# elasticsearch

elasticsearch 관리에 있어서 유용한 cli 도구를 제작할 예정입니다.

# 이전 버전의 소스코드
- 이전의 스크립트 들은 hoian-webapp에서 elastic docker container에서 이용하고 있었습니다.
- 비슷한 내용으로는 hoian-ami-builder/search에서도 쓰고 있지만 elasticsearch-utils의 내용을 직접 checkout해서 쓰고 있지는 않습니다.

# CLI Documents

1. mecab 의 사용자 사전을 Nori 포맷의 사용자 사전으로 바꾸고 싶을 때

```
daangn-es mecab2nori -f ./resources/input-daangn-mecab-dict.csv -o {OUTPUT_PATH(optional)}
daangn-es mecab2nori -f ./resources/input-daangn-mecab-dict.csv
```

