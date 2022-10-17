<template>
    <div class="btn-sm-wrap"></div>
    <div class="btn-lg-wrap">
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

.btn-lg-wrap {
    @include column-flexbox();
    button {
        margin-top: 8px;
    }

    .btn-lg {
        color: $white;
        background-color: $black;
        i {
            padding-left: 16px;
            margin-bottom: 4px;
        }
    }

    .ic-kakao {
        color: $main;
    }

    .ic-naver {
        color: $green;
    }
}
</style>
