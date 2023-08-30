<template>
  <div>
    <b-modal v-model="ModalShow" size="lg" id="handle-modal" hide-footer hide-header>
      <form @submit.prevent="handleSubmit">
        <table class="table align-middle">
          <thead>
          <tr>
            <td colspan="2" class="text-end">
              <b-button variant="outline-info" type="submit" class="submit-button" v-if="isRegister===true">저장
              </b-button>
              <b-button variant="outline-info" type="submit" class="submit-button" v-if="isRegister===false">수정
              </b-button>
              <b-button variant="outline-danger" @click="deleteItem(selectItem.id)" v-if="isRegister===false">삭제
              </b-button>
              <b-button variant="outline-dark" @click="$bvModal.hide('handle-modal')" class="x-button">X</b-button>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <h4 v-if="isRegister===false">프로젝트</h4>
              <h4 v-if="isRegister===true">등록하기</h4>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              순번
            </td>
            <td class="col-8">
              <b-form-input placeholder="순번" name="num" type="text" v-model="selectItem.num" :state="validationNum"></b-form-input>
              <b-form-invalid-feedback :state="validationNum">
                순번을 입력해주세요
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationNum">
                Looks Good.
              </b-form-valid-feedback>
            </td>
          <tr>
            <td>
              프로젝트 구분
            </td>
            <td>
              <b-form-input placeholder="프로젝트 구분" name="project" type="text"
                            v-model="selectItem.project" :state="validationProject"></b-form-input>
              <b-form-invalid-feedback :state="validationProject">
                프로젝트 구분을 입력해주세요
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationProject">
                Looks Good.
              </b-form-valid-feedback>
            </td>
          </tr>
          <tr>
            <td>
              항목
            </td>
            <td>
              <b-form-input placeholder="항목" name="item" type="text" v-model="selectItem.item" :state="validationItem"></b-form-input>
              <b-form-invalid-feedback :state="validationItem">
                항목을 입력해주세요
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationItem">
                Looks Good.
              </b-form-valid-feedback>
            </td>
          </tr>
          <tr>
            <td>
              지라링크
            </td>
            <td>
              <b-form-input placeholder="지라링크" name="jiraLink" type="text" v-model="selectItem.jiraLink" :state="validationJiraLink"></b-form-input>
              <b-form-invalid-feedback :state="validationJiraLink">
                지라링크를 입력해주세요
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationJiraLink">
                Looks Good.
              </b-form-valid-feedback>
            </td>
          </tr>
          <tr>
            <td>
              담당부서
            </td>
            <td>
              <b-form-input placeholder="담당부서" name="department" type="text"
                            v-model="selectItem.department" :state="validationDepartment"></b-form-input>
              <b-form-invalid-feedback :state="validationDepartment">
                담당부서를 입력해주세요
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationDepartment">
                Looks Good.
              </b-form-valid-feedback>
            </td>
          </tr>
          <tr>
            <td>
              PO/PM
            </td>
            <td>
              <div class="d-flex">
                <b-form-input placeholder="PO" name="productOwner" class="me-2" type="text"
                              v-model="selectItem.productOwner" :state="validationProductOwner"></b-form-input>
                <b-form-invalid-feedback :state="validationProductOwner">
                  PO를 입력해주세요
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationProductOwner">
                  Looks Good.
                </b-form-valid-feedback>
                <b-form-input placeholder="PM" name="productManager" class="me-2" type="text"
                              v-model="selectItem.productManager" :state="validationProductManager"></b-form-input>
                <b-form-invalid-feedback :state="validationProductManager">
                  PM을 입력해주세요
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationProductManager">
                  Looks Good.
                </b-form-valid-feedback>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              진행상태
            </td>
            <td>
              <b-form-select class="form-select" v-model="selectItem.progress" :options="options" :state="validationProgress"></b-form-select>
              <b-form-invalid-feedback :state="validationProgress">
                진행상태를 입력해주세요
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validationProgress">
                Looks Good.
              </b-form-valid-feedback>
            </td>
          </tr>
          <tr>
            <td>
              기획
            </td>
            <td>
              <div class="d-flex align-middle mt-auto h-auto">
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.planStartDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      :state="validationPlanStartDate"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="planStartDate"
                                         v-model="selectItem.planStartDate"
                                         right
                                         button-only
                                         :state="validationPlanStartDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationPlanStartDate">
                    기획 시작 날짜를 입력해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationPlanStartDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.planEndDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                    :state="validationPlanEndDate"></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="planEndDate"
                                         v-model="selectItem.planEndDate"
                                         right
                                         button-only
                                         :state="validationPlanEndDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationPlanEndDate">
                    기획 종료 날짜를 입력해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationPlanEndDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              설계
            </td>
            <td>
              <div class="d-flex align-middle mt-auto h-auto">
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.designStartDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      :state="validationDesignStartDate"></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="designStartDate"
                                         v-model="selectItem.designStartDate"
                                         right
                                         button-only
                                         :state="validationDesignStartDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationDesignStartDate">
                    기획 종료 이후 날짜로 설정해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationDesignStartDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.designEndDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      :state="validationDesignEndDate"></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="designEndDate"
                                         v-model="selectItem.designEndDate"
                                         right
                                         button-only
                                         :state="validationDesignEndDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationDesignEndDate">
                    설계 시작 이후 날짜로 설정해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationDesignEndDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              개발/구현
            </td>
            <td>
              <div class="d-flex align-middle mt-auto h-auto">
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.developmentStartDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      :state="validationDevelopmentStartDate"></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="developmentStartDate"
                                         v-model="selectItem.developmentStartDate"
                                         right
                                         button-only
                                         :state="validationDevelopmentStartDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationDevelopmentStartDate">
                    설계 종료 이후 날짜로 설정해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationDevelopmentStartDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.developmentEndDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      :state="validationDevelopmentEndDate"></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="developmentEndDate"
                                         v-model="selectItem.developmentEndDate"
                                         right
                                         button-only
                                         :state="validationDevelopmentEndDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationDevelopmentEndDate">
                    개발/구현 시작 이후 날짜로 설정해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationDevelopmentEndDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              오픈
            </td>
            <td>
              <div class="d-flex align-middle mt-auto h-auto">
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.openStartDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      :state="validationOpenStartDate"></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="openStartDate"
                                         v-model="selectItem.openStartDate"
                                         right
                                         button-only
                                         :state="validationOpenStartDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationOpenStartDate">
                    개발/구현 종료 이후 날짜로 설정해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationOpenStartDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
                <p class="col-5 m-auto">
                  <b-input-group>
                    <b-form-input
                      v-model="selectItem.openEndDate"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      :state="validationOpenEndDate"></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker name="openEndDate"
                                         v-model="selectItem.openEndDate"
                                         right
                                         button-only
                                         :state="validationOpenEndDate"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                  <b-form-invalid-feedback :state="validationOpenEndDate">
                    오픈 시작 이후 날짜로 설정해주세요
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationOpenEndDate">
                    Looks Good.
                  </b-form-valid-feedback>
                </p>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    </b-modal>

    <div>
      <div class="text-lg-start">
        <h2>[2022년 솔루션 개발 계획]</h2>
      </div>
      <div class="d-flex justify-content-center color-boxList">
        <p>기획</p>
        <div class="color-box bg-info"></div>
        <p>설계</p>
        <div class="color-box bg-primary"></div>
        <p>개발/구현</p>
        <div class="color-box bg-warning"></div>
        <p>오픈</p>
        <div class="color-box bg-danger"></div>
      </div>
      <div class="justify-content-between d-flex">
        <div class="d-flex">
          <input type="month" name="startDate" id="startDate" v-model="startDate">
          <input type="month" name="endDate" id="endDate" v-model="endDate">
          <b-button @click="lookup" variant="outline-dark">조회</b-button>
        </div>

        <b-button variant="outline-info" @click="register">등록하기</b-button>
      </div>
      <b-table class="project-list-table" :items="items" :fields="fields" responsive="sm" :sort-by.sync="sortBy"
               :sort-desc.sync="sortDesc"
               ⋮
               label-sort-asc=""
               label-sort-desc=""
               label-sort-clear=""
               @input="tableLoaded"
               ref="table"
               @row-clicked="goDetail">
      </b-table>
    </div>
  </div>

</template>

<script>

export default {
  name: "ProjectListTable.vue",
  data() {
    return {
      theadString: '',
      startDate: '',
      endDate: '',
      isRegister: true,
      ModalShow: false,
      sortBy: 'num',
      sortDesc: false,
      colors: {plan: 'info', design: 'primary', development: 'warning', open: 'danger'},
      selectItem: {
        num : '',
        project : '',
        item : '',
        jiraLink: '',
        department: '',
        productOwner: '',
        productManager: '',
        progress: '',
        planStartDate:'',
        planEndDate:'',
        designStartDate:'',
        designEndDate:'',
        developmentStartDate:'',
        developmentEndDate:'',
        openStartDate:'',
        openEndDate:''
      },
      items: [],
      fields: [
        {key: 'num', label: '순번', sortable: true,},
        {key: 'project', label: '프로젝트구분', sortable: true},
        {key: 'item', label: '항목', sortable: true},
        {key: 'jiraLink', label: '지라링크', sortable: true},
        {key: 'department', label: '담당부서', sortable: true},
        {key: 'productOwner', sortable: true},
        {key: 'productManager', sortable: true},
        {key: 'progress', label: '진행상태', sortable: true},
        {key: 'endDate', label: '종료일자', sortable: true}
      ],
      ProjectList: '',
      monthName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      currentYear: new Date().getFullYear(),
      options: [
        { value: '예정', text: '예정' },
        { value: '요구사항_분석', text: '요구사항 분석' },
        { value: '설계', text: '설계' },
        { value: '구현', text: '구현' },
        { value: '오픈', text: '오픈' },
        { value: '운영', text: '운영' },
        { value: '완료', text: '완료' },
        { value: '이슈', text: '이슈' },
        { value: '보류', text: '보류' },
      ]
    }
  },
  computed : {

    validationNum() {
      return this.isNotNull(this.selectItem.num)
    },
    validationProject(){
      return this.isNotNull(this.selectItem.project)
    },
    validationItem(){
      return this.isNotNull(this.selectItem.item)
    },
    validationJiraLink(){
      return this.isNotNull(this.selectItem.jiraLink)
    },
    validationDepartment(){
      return this.isNotNull(this.selectItem.department)
    },
    validationProductOwner(){
      return this.isNotNull(this.selectItem.productOwner)
    },
    validationProductManager(){
      return this.isNotNull(this.selectItem.productManager)
    },
    validationProgress() {
      return this.isNotNull(this.selectItem.progress)
    },
    validationPlanStartDate(){
      return this.isNotNull(this.selectItem.planStartDate)
    },
    validationPlanEndDate(){
      return this.isNotNull(this.selectItem.planEndDate)
        && this.dateValidation(this.selectItem.planStartDate,this.selectItem.planEndDate)
    },
    validationDesignStartDate(){
      return this.dateValidation(this.selectItem.planEndDate,this.selectItem.designStartDate)
    },
    validationDesignEndDate(){
      return this.dateValidation(this.selectItem.designStartDate,this.selectItem.designEndDate)
    },
    validationDevelopmentStartDate(){
      return this.dateValidation(this.selectItem.designEndDate,this.selectItem.developmentStartDate)
    },
    validationDevelopmentEndDate(){
      return this.dateValidation(this.selectItem.developmentStartDate,this.selectItem.developmentEndDate)
    },
    validationOpenStartDate() {
      return this.dateValidation(this.selectItem.developmentEndDate,this.selectItem.openStartDate)
    },
    validationOpenEndDate() {
      return this.dateValidation(this.selectItem.openStartDate,this.selectItem.openEndDate)
    }

  }
  , methods: {
    dateValidation(beforeDate,afterDate){
      return (beforeDate !== undefined && beforeDate !== '') && (afterDate !== undefined && afterDate !== '') ?
        beforeDate < afterDate : true;
    },
    isNotNull(data) {
      return data !== undefined && data !== ''
    },
    getTheadString() {
      let startYear = localStorage.getItem('startDate') ? new Date(localStorage.getItem('startDate')).getFullYear() : null
      if(startYear) {
        const StartDate = new Date(localStorage.getItem('startDate'));
        const EndDate = new Date(localStorage.getItem('endDate'));
        if (StartDate !== null && EndDate !== null) {
          function monthDiff(dateFrom, dateTo) {
            return dateTo.getMonth() - dateFrom.getMonth() +
              (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
          }

          let monthlyDifference = monthDiff(StartDate, EndDate)
          const startDateMonth = StartDate.getMonth()
          this.theadString =
            '<th colspan="8">project</th>';

          this.theadString += "<th colspan='" + (12 - startDateMonth).toString() + "'>" + startYear.toString() + "년" + "</th>";
          monthlyDifference -= (12 - startDateMonth)

          const term = Math.floor(monthlyDifference / 12);
          const remain = monthlyDifference % 12;

          if (term > 0) {
            for (let i = 0; i < term; i++) {
              startYear += 1;
              this.theadString += "<th colspan='12'>" + startYear.toString() + "년" + "</th>";
            }
          }
          if (remain > 0) {
            this.theadString += "<th colspan='" + remain.toString() + "'>" + (startYear + 1).toString() + "년" + "</th>";
          }
        }
      }

      return this.theadString
    },
    tableLoaded() {
      if (!this.$refs.table) {
        return;
      }

      const headers = this.$refs.table.$el.querySelectorAll('thead tr');
      if (headers.length > 1) {
        return;
      }

      const topHeader = document.createElement('tr');
      topHeader.innerHTML = this.getTheadString();

      headers[0].parentNode.insertBefore(topHeader, headers[0]);


    },
    lookup() {
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      localStorage.setItem('startDate', startDate);
      localStorage.setItem('endDate', endDate);
      window.location.reload();
    },
    register() {
      this.isRegister = true;
      this.selectItem = {};
      this.ModalShow = !this.ModalShow;
    },
    async deleteItem(id) {
      await this.$store.dispatch("deleteProject", id);
      window.location.reload();
    }
    ,
    async goDetail(item) {
      const id = item.id.toString()
      const response = await this.$store.dispatch("getProject", id);
      this.selectItem = response.data;
      this.isRegister = false;
      this.ModalShow = !this.ModalShow;

    }
    ,
    async handleSubmit() {
      const data = this.selectItem;

      if (this.isRegister) {
        await this.$store.dispatch("postProject", data);
      }

      if (!this.isRegister) {
        await this.$store.dispatch("updateProject", data);
      }

    },
    async getTableList() {
      const key = {startDate: localStorage.getItem('startDate'), endDate: localStorage.getItem('endDate')}
      const response = await this.$store.dispatch("getProjectList", key);
      const dataList = response.data

      dataList.forEach(item => {
        const cellVariants = {}

        item.planStartDate && this.getMonthCellVariants(item.planStartDate, item.planEndDate, cellVariants, this.colors.plan);
        item.designStartDate && this.getMonthCellVariants(item.designStartDate, item.designEndDate, cellVariants, this.colors.design);
        item.developmentStartDate && this.getMonthCellVariants(item.developmentStartDate, item.developmentEndDate, cellVariants, this.colors.development);
        item.openStartDate&& this.getMonthCellVariants(item.openStartDate, item.openEndDate, cellVariants, this.colors.open);

        const endDateList = [item.planEndDate,item.designEndDate,item.developmentEndDate,item.openEndDate];
        item.endDate = endDateList.reduce((prev,curr)=>{
          return new Date(prev).getTime() <= new Date(curr).getTime() ? curr : prev;
        });

        item._cellVariants = cellVariants;
        this.items.push(item);
      });
    },
    getMonthCellVariants(startDate, endDate, cellVariants, color) {
      const StartDate = new Date(startDate);
      const EndDate = new Date(endDate);
      const monthlyDifference = this.monthDiff(StartDate, EndDate)
      for (let i = 0 ; i <= monthlyDifference ; i++) {
        cellVariants[this.monthName[this.addMonth(StartDate,i).getMonth()]+this.addMonth(StartDate,i).getFullYear()] = color
      }
    },
    addMonth(date, month) {
      // month달 후의 1일
      let addMonthFirstDate = new Date(
        date.getFullYear(),
        date.getMonth() + month,
        1
      );

      // month달 후의 말일
      let addMonthLastDate = new Date(
        addMonthFirstDate.getFullYear(),
        addMonthFirstDate.getMonth() + 1
        , 0
      );

      let result = addMonthFirstDate;
      if(date.getDate() > addMonthLastDate.getDate())
      {
        result.setDate(addMonthLastDate.getDate());
      }
      else
      {
        result.setDate(date.getDate());
      }

      return result;
    },
    monthDiff(dateFrom, dateTo) {
      return dateTo.getMonth() - dateFrom.getMonth() +
        (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    }
  },
  mounted() {
    this.startDate = new Date(localStorage.getItem('startDate'));
    this.endDate = new Date(localStorage.getItem('endDate'));
    const startMonth = new Date(this.startDate).getMonth()
    if (this.startDate !== null && this.endDate !== null) {
      const monthlyDifference = this.monthDiff(new Date(this.startDate), new Date(this.endDate))
      console.log(monthlyDifference)
      for (let i = 0 ; i <= monthlyDifference ; i++) {
        let tempArray = {}
        tempArray.key = this.monthName[this.addMonth(this.startDate,i).getMonth()]+this.addMonth(this.startDate,i).getFullYear()
        tempArray.label = this.monthName[this.addMonth(this.startDate,i).getMonth()]
        this.fields.push(tempArray);
      }

      this.getTableList();


    }


  }

}
</script>

<style scoped>
.color-box {
  width: 70px;
  height: 25px;
  opacity: 0.3;
  border: 1px solid black;
  margin-left: 10px;
  margin-right: 30px;
}

.color-boxList {
  z-index: -1;
  position: relative
}

.project-list-table {
  border: 1px solid #526488;
  margin-top: 15px;
  font-size: 80%;
}

body {
  margin: 0
}

div {
  box-sizing: border-box;
}

.submit-button {
  width: 10%;
}

.x-button {
  width: 5%;
}


</style>
