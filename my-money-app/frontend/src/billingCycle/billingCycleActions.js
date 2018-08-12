import axios from "axios";
import { toastr } from "react-redux-toastr";

import { initialize } from "redux-form";
import { selectTab, showTabs } from "../common/tab/tabActions";

const BASE_URL = `http://localhost:3003/api/billingCycles`;
const INITIAL_VALUES = {
  credits: [{}]
};

export function getList() {
  const request = axios.get(`${BASE_URL}`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request
  };
}

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return dispatch => {
    const id = values._id || "";
    axios[method](`${BASE_URL}/${id}`, values)
      .then(resp => {
        toastr.success("Sucesso", "Operação realizada com sucesso.");
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Erro", error));
      });
  };
}

function showTab(tab, billingCycle) {
  return [
    showTabs(`tab${tab}`),
    selectTab(`tab${tab}`),
    initialize("billingCycleForm", billingCycle)
  ];
}

export function showUpdate(billingCycle) {
  return showTab("Update", billingCycle);
}

export function showDelete(billingCycle) {
  return showTab("Delete", billingCycle);
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES)
  ];
}
