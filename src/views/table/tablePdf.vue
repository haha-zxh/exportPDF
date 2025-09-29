<template>
  <div class="width height flex flex-column flex-center">
    <div id="table" class="table-content padding-l50 padding-r50">
      <table class="table-box">
        <tr>
          <th colspan="2">
            全電子汽車衡稱单
          </th>
        </tr>
        <tr>
          <td width="100px">
            客户名稱
          </td>
          <td width="181px">
            123123123123123123123123123
          </td>
        </tr>
        <tr>
          <td>
            貨品名稱
          </td>
          <td />
        </tr>
        <tr>
          <td>
            司稱员
          </td>
          <td />
        </tr>
        <tr>
          <td>
            主管
          </td>
          <td />
        </tr>
      </table>
      <div class="table-gap-text padding-y5">
        第三聯:客户留存
      </div>
      <table class="table-box">
        <tr>
          <td width="100px">
            序號
          </td>
          <td width="181px">
            585885
          </td>
        </tr>
        <tr>
          <td>
            日期
          </td>
          <td />
        </tr>
        <tr>
          <td>
            入廠时间
          </td>
          <td />
        </tr>
        <tr>
          <td>
            出廠时间
          </td>
          <td />
        </tr>
        <tr>
          <td>
            車號
          </td>
          <td />
        </tr>
        <tr>
          <td>
            客户代號
          </td>
          <td />
        </tr>
        <tr>
          <td>
            收費(物料)
          </td>
          <td />
        </tr>
        <tr>
          <td>
            總重
          </td>
          <td />
        </tr>
        <tr>
          <td>
            空重
          </td>
          <td />
        </tr>
        <tr>
          <td>
            净重
          </td>
          <td />
        </tr>
      </table>
    </div>
  </div>
  <el-button class="export-btn" type="primary" @click="htmlToPdf.getPdf('table', '#table')">
    打印
  </el-button>
</template>
<script setup>
import htmlToPdf from '@/utils/exportPdf.js'
</script>
<style scoped lang="less">
.table-box {
  border-collapse: collapse;
  border: 1px solid rgb(105, 190, 246);
  color: rgb(105, 190, 246);
  word-wrap:break-word;
  word-break:break-all;
  white-space:normal;
  td, th {
    border: 1px solid rgb(105, 190, 246);
    border-collapse: collapse;
    text-align: center;
  }
  th {
    padding: 10px 20px;
    font-size: 30px;
  }
  td {
    font-size: 20px;
    padding: 5px 0;
  }
}
.padding-r50 {
  padding-right: 50px;
}
.padding-l50 {
  padding-left: 50px;
}
.table-gap-text {
  text-align: center;
  color: rgb(105, 190, 246);
  font-size: 20px;
}
.padding-y5 {
  padding: 5px 0;
}
.export-btn {
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
  width: 100px;
}
</style>
