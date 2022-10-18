<template>
    <div class="col">
        <h2 class="font-lg">Icons</h2>
        <div class="row icon-wrap">
            <i class="ic-search"> </i>
            <i class="ic-naver"> </i>
            <i class="ic-kakao"> </i>
            <i class="ic-menu"> </i>
        </div>
    </div>
    <hr />
    <div class="btn-lg-wrap col">
        <h2 class="font-lg">Button Component (Large Size)</h2>
        <button class="btn-lg btn-kakao">
            카카오 로그인
            <i class="ic-kakao"></i>
        </button>
        <button class="btn-lg btn-naver">
            네이버 로그인
            <i class="ic-naver"></i>
        </button>
    </div>
    <hr />
    <div class="btn-sm-wrap col">
        <h2 class="font-lg">Buttons (Small Size)</h2>
        <h3 class="font-lg">disabled</h3>
        <button class="btn-sm btn-pos" disabled>확인</button>
        <button class="btn-sm btn-active" disabled>수정</button>
        <button class="btn-sm btn-caution" disabled>삭제</button>

        <h3 class="font-lg">active</h3>
        <button class="btn-sm btn-pos">확인</button>
        <button class="btn-sm btn-active">수정</button>
        <button class="btn-sm btn-caution">삭제</button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.font-lg {
    @include text-style(24);
}

.font-md {
    @include text-style(16);
}

.font-lg {
    @include text-style(24);
}

.col {
    @include column-flexbox();
    padding: 32px 0;
}

.row {
    @include flexbox(start);
}

.icon-wrap {
    i {
        margin-left: 8px;
    }
}

.btn-lg-wrap {
    button {
        margin-top: 8px;
    }

    .btn-lg {
        color: $white;
        background-color: $black;
        i {
            padding-left: 16px;
            margin-bottom: 2px;
        }
    }

    .ic-kakao {
        color: $main;
    }

    .ic-naver {
        color: $green;
    }
}

.btn-sm-wrap {
    button {
        margin-top: 8px;
    }
}
</style>
