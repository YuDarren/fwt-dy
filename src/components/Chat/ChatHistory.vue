<script>
export default {};
</script>
<template>
  <div class="chathistory_block">
    <div class="chathistory">
      <div class="history_tit">Chats</div>
      <div class="history_con">
        <div class="chat_user">
          <div class="user_photo">
            <img src="@/assets/img/avatar54_05.png" alt="" />
            <div class="circlegreen"></div>
          </div>
          <div class="user_con">
            <div class="name">Darlene Black</div>
            <div class="message">
              <div class="message_photo">
                <img src="@/assets/img/avatar54_07.png" alt="" />
              </div>
              <div class="msg opacity">Hey, how is your project?</div>
            </div>
          </div>
        </div>
        <div class="chat_user">
          <div class="user_photo">
            <img src="@/assets/img/avatar54_01.png" alt="" />
            <div class="circlegreen"></div>
          </div>
          <div class="user_con">
            <div class="name blue">Theresa Steward</div>
            <div class="message">
              <!-- <div class="message_photo">
                <img src="@/assets/img/avatar54_07.png" alt="" />
              </div> -->
              <div class="msg">Hi, Dmitry! I have a work for you. We</div>
            </div>
          </div>
        </div>
        <div class="chat_user">
          <div class="user_photo">
            <img src="@/assets/img/avatar54_03.png" alt="" />
            <div class="circle"></div>
          </div>
          <div class="user_con">
            <div class="name">Brandon Wilson</div>
            <div class="message">
              <!-- <div class="message_photo">
                <img src="@/assets/img/avatar54_07.png" alt="" />
              </div> -->
              <div class="msg">I am Russian and I am learning Engl</div>
            </div>
          </div>
        </div>
        <div class="chat_user line">
          <div class="user_photo opacity">
            <img src="@/assets/img/avatar54_02.png" alt="" />
            <div class="circlegreen"></div>
          </div>
          <div class="user_con opacity">
            <div class="name">Kyle Fisher</div>
            <div class="message">
              <!-- <div class="message_photo">
                <img src="@/assets/img/avatar54_07.png" alt="" />
              </div> -->
              <div class="msg">So, It’s up to you!</div>
            </div>
          </div>
        </div>
        <div class="chat_user">
          <div class="user_photo">
            <img src="@/assets/img/avatar54_04.png" alt="" />
            <div class="circlegreen"></div>
          </div>
          <div class="user_con">
            <div class="name">Audrey Alexander</div>
            <div class="message">
              <div class="message_photo">
                <img src="@/assets/img/avatar54_07.png" alt="" />
              </div>
              <div class="msg opacity">When you got it?</div>
            </div>
          </div>
        </div>
        <div class="chat_user">
          <div class="user_photo">
            <img src="@/assets/img/avatar54_08.png" alt="" />
            <!-- <div class="circlegreen"></div> -->
          </div>
          <div class="user_con">
            <div class="name">Design Conference</div>
            <div class="message">
              <div class="message_photo">
                <img src="@/assets/img/avatar54_07.png" alt="" />
              </div>
              <div class="msg opacity">Can you guys help me with it?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chathistory_block {
  background: #fff;
  border-radius: 4px;
  .chathistory {
    .history_tit {
      font-size: 12px;
      font-weight: 600;
      padding: 20px 30px;
      text-transform: uppercase;
      border-bottom: 1px solid #f4f4f4;
    }
    .history_con {
      .chat_user {
        display: flex;
        align-items: center;
        padding-left: 10px;
        border-bottom: 1px solid #f4f4f4;

        .user_photo {
          padding: 20px 20px 10px 20px;
          position: relative;
          img {
            width: 52px;
            height: 52px;
          }
          .circle {
            position: absolute;
            background: #fff;
            border-radius: 50%;
            right: 25px;
            bottom: 15px;
            width: 7px;
            height: 7px;
            border: 2px solid #02b033;
          }
          .circlegreen {
            position: absolute;
            background: #02b033;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            right: 25px;
            bottom: 15px;
          }
        }
        .user_con {
          display: block;
          .name {
            font-size: 14px;
            font-weight: 800;
          }
          .message {
            display: flex;

            line-height: 1.5;
            .message_photo {
              display: flex;
              align-items: center;
              margin-right: 5px;
              img {
                width: 9px;
                height: 9px;
              }
            }
            .msg {
              font-size: 10px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
  .blue {
    color: #0275b1;
  }
  .opacity {
    opacity: 0.6;
  }
  .line {
    border-left: 10px solid #0275b1;
  }
}
</style>
