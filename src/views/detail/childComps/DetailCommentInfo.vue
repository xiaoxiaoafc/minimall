<template>
	<div class="comment" v-if="Object.keys(commentInfo).length > 0">
		<div class="comment-hread">
			<div class="hread-title">
					用户评价
			</div>
			<div class="hread-more">
				更多>
			</div>
			<i class="arrow-right"></i>
		</div>
		<div class="comment-user">
			<img :src="commentInfo.user.avatar">
			<span>{{commentInfo.user.uname}}</span>
		</div>
		<div class="comment-detail">
			<div class="comment-content">
				{{commentInfo.content}}
			</div>
			<div class="comment-other">
				<span class="data">{{formatCreated }}</span>
				<span>{{commentInfo.style}}</span>
			</div>
		</div>

	</div>
</template>

<script>

	import {formatDate} from "common/utils";

	export default {
		name: "DetailCommentInfo",
		props : {
			commentInfo : {
				type : Object,
				default : {}
			}
		},
		computed : {
			formatCreated: function (value) {
				let date = new Date(this.commentInfo.created * 1000);
				return formatDate(date, 'yyyy-MM-dd')
			},
		},

	}
</script>

<style scoped>

	.comment{
		width: 100%;
		padding: 5px 15px 12px 12px;
		border-bottom: 5px solid #f2f5f8;
	}

	.comment-hread{
		display: flex;
		justify-content: space-evenly;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.hread-title {
		flex: 1;
	}
	.arrow-right{
		margin-left: 14px;
	}

	.comment-user{
		display: flex;
		align-items: center;
		padding: 10px;
	}


	.comment-user img{
		width: 50px;
		height: 50px;
		border-radius: 100px;
	}
	.comment-user span{
		margin-left: 10px;
		font-size: 14px;
	}

	.comment-content{
		font-size: 14px;
	}

	.comment-other{
		margin-top: 8px;
		font-size: 12px;
		color: #999;
	}

	.comment-other .data{
		margin-right: 8px;
	}
</style>
