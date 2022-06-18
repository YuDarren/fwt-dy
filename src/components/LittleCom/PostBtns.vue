<script>import { Share } from '@element-plus/icons-vue';
export default {
    components:{Share}};
</script>
<template>
      <div class="post_btns">
        <div class="good_reply">
          <div class="good">
            <div:focus-within class="good_photo">
              <a href="#"><img src="@/assets/menuIcon/good.png" alt="" /></a>
            </div:focus-within>
            <div class="good_num">42</div>
          </div>
          <div class="reply">
            <div:focus-within class="reply_photo">
              <a href="#"><img src="@/assets/menuIcon/reply.png" alt=""></a>
            </div:focus-within>
            <div class="reply_num">9</div>
          </div>
        </div>
        <div class="share">
          <div class="share_photo">
            <a href="#"
              ><el-icon><Share /></el-icon
            ></a>
          </div>
          <div class="share_text">share</div>
        </div>
      </div>
</template>
<style lang="scss" scoped>
    .post_btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      font-weight: 600;
      border-top: 1px solid #f4f4f4;
      .good_reply {
        display: flex;
        .good {
          border-right: 1px solid #f4f4f4;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          .good_photo {
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 16px;
              height: 16px;
              img {
                width: 16px;
                height: 16px;
              }
            }
          }
          .good_photo:focus-within a img {
            width: 16px;
            height: 16px;
            content: url("~@/assets/menuIcon/good_focus.png");
          }

          .good_num {
            margin-left: 10px;
          }
        }
        .reply {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #f4f4f4;
          padding: 10px 20px;
          .reply_photo {
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 16px;
              height: 16px;
              img {
                width: 16px;
                height: 16px;
              }
            }
          }
          .reply_photo:focus-within a img {
            width: 16px;
            height: 16px;
            content: url("~@/assets/menuIcon/reply_focus.png");
          }
          .reply_num {
            margin-left: 10px;
          }
        }
      }
      .share {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        padding: 10px 20px;
        border-left: 1px solid #f4f4f4;

        .share_photo {
          .el-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0275b1;
            font-size: 16px;
          }
        }
        .share_text {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 10px;
        }
      }
    }</style>
