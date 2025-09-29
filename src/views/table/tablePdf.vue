<template>
  <el-switch
    v-model="isEdit"
    class="switch-edit"
    active-text="开启编辑"
    inactive-text="关闭编辑"
  />
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
            <el-input v-if="isEdit" v-model="tableData.customerName" />
            <span v-else>{{ tableData.customerName }}</span>
          </td>
        </tr>
        <tr>
          <td>
            貨品名稱
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.productName" />
            <span v-else>{{ tableData.productName }}</span>
          </td>
        </tr>
        <tr>
          <td>
            司稱员
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.scalesName" />
            <span v-else>{{ tableData.scalesName }}</span>
          </td>
        </tr>
        <tr>
          <td>
            主管
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.Supervisor" />
            <span v-else>{{ tableData.Supervisor }}</span>
          </td>
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
            <el-input v-if="isEdit" v-model="tableData.number" />
            <span v-else>{{ tableData.number }}</span>
          </td>
        </tr>
        <tr>
          <td>
            日期
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.date" />
            <span v-else>{{ tableData.date }}</span>
          </td>
        </tr>
        <tr>
          <td>
            入廠时间
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.entryTime" />
            <span v-else>{{ tableData.entryTime }}</span>
          </td>
        </tr>
        <tr>
          <td>
            出廠时间
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.factoryTime" />
            <span v-else>{{ tableData.factoryTime }}</span>
          </td>
        </tr>
        <tr>
          <td>
            車號
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.carNumber" />
            <span v-else>{{ tableData.carNumber }}</span>
          </td>
        </tr>
        <tr>
          <td>
            客户代號
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.customerNumber" />
            <span v-else>{{ tableData.customerNumber }}</span>
          </td>
        </tr>
        <tr>
          <td>
            收費(物料)
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.charge" />
            <span v-else>{{ tableData.charge }}</span>
          </td>
        </tr>
        <tr>
          <td>
            總重
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.totalWeight" />
            <span v-else>{{ tableData.totalWeight }}</span>
          </td>
        </tr>
        <tr>
          <td>
            空重
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.emptyWeight" />
            <span v-else>{{ tableData.emptyWeight }}</span>
          </td>
        </tr>
        <tr>
          <td>
            净重
          </td>
          <td>
            <el-input v-if="isEdit" v-model="tableData.netWeight" />
            <span v-else>{{ tableData.netWeight }}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <el-button :disabled="isEdit" class="export-btn" type="primary" @click="exportClick">
    打印
  </el-button>
</template>
<script setup>
import htmlToPdf from '@/utils/exportPdf.js'
import timeTool from '@/utils/timeTools.js'
import {reactive, ref} from 'vue'

const isEdit = ref(false)
const tableData = reactive({
  customerName: '', // 客户名称
  productName: '', // 产品名称
  scalesName: '', // 司称员
  Supervisor: '', // 主管
  number: '', // 序号
  date: '', // 日期
  entryTime: '', // 入厂时间
  factoryTime: '', // 出厂时间
  carNumber: '', // 车号
  customerNumber: '', // 客户代號
  charge: '', // 收费(物料)
  totalWeight: '', // 总重
  emptyWeight: '', // 空重
  netWeight: '' // 净重
})
const exportClick = () => {
  const name = '车牌' + tableData.carNumber + '-' + timeTool.formatTime(new Date())
  htmlToPdf.getPdf(name, '#table')
}
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
    span {
      color: gray;
    }
  }
  :deep(.el-input__wrapper) {
    box-shadow: none;
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
.switch-edit {
  position: absolute;
  top: 20px;
  transform: translateX(-50%);
  left: 50%;
}
</style>
