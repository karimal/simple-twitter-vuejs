<template id="feed">
    <div>
        <div v-for="tweet in feed" :key="tweet.title" class="tweet">

            <div class="avatarContainer">
                <img :src="tweet.avatar" class="avatar" width="70" height="70">
            </div>

            <div class="tweetBody">
                <div class="tweetHead">
                    <span class="author">
                        {{ tweet.author }}
                    </span>
                    {{ tweet.date }}
                </div>
                <div class="tweetContent">
                    {{ tweet.body }}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                data: store.data
            }
        },
        computed: {
            feed() {
                return this.data.feed.filter(tweet => {
                    return tweet.body.indexOf(this.data.search) > -1;
                })
            }
        }
    }
</script>

<style>
    .avatarContainer {
        margin-right: 20px;
    }

    .avatar {
        margin-top: 3px;
        border-radius: 50%;
    }

    .tweetBody {
        margin-top: 5px;
    }

    .tweetHead {
        font-size: 13px;
    }

    .author {
        font-size: 14px;
        font-weight: bold;
    }

    .tweetContent {
        font-size: 14px;
        line-height: 20px;
        margin-top: 8px;
    }
</style>
