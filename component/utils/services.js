import axios from "axios";
import {
  HOME_PAGE,
  INVEST_PAGE,
  BECOMEAGENT_PAGE,
  PROTECT_PAGE,
  PLAN_PAGE,
  About_PAGE,
  GET_IN_TOUCH_FORM,
  GET_IN_TOUCH_PLANFORM,
  GET_IN_TOUCH_INVESTFORM,
  GET_IN_TOUCH_PROTECTRFORM,
  GET_IN_TOUCH_BECOMEAGENTFORM,
  Health_insurance_faqs,
  Term_insurance_faqs,
  unit_linked_insurance_plan,
  HOME_BLOG,
  Contact_Page,
  Technology_Team_Invest_PAGE,
  Support_Account_Invest_PAGE,
  Financial_Planner_Invest_PAGE,
  Become_Advisor_faq_Become_PAGE,
  Plan_faq_Plan_PAGE,
  Invest_faq_Invest_PAGE,
  Protect_faq_Protect_PAGE,
  Trusted_Partner_Invest_PAGE,
  GET_IN_TOUCH_CONTACTFORM,
  Asset_insurance_faqs_home,
  Financial_planning,
  Investment_planning,
  Goal_planning,
  Tax_saving_and_planning,
  Legacy_and_inheritance_planning,
  Financial_planning_faqs,
  Mutual_fund,
  Sipunit_linked_insurance_plan,
  Sip,
  Guaranteed_income_insurance_plan,
  Gold,
  Asset_insurance_faqs,
  Unit_linked_insurance_plan,
  Critical_insurance_faqs,
  Alternative_investment,
  Fixed_income_return,
  Health_insurance,
  Term_insurance,
  Asset_insurance,
  Critical_insurance,
  investment_planning_faqs,
  Goal_planning_faqs,
  Tax_saving_and_planning_faqs,
  Legacy_and_inheritance_planning_faqs,
  Mutual_fund_faqs,
  Sip_faqs,
  Fixed_income_returns_faqs,
  Gold_faqs,
  Unit_linked_insurance_plans_faqs,
  Guaranteed_income_insurance_plans_faqs,
  Alternative_investments_faqs,
  Term_andCondition,
  Privacy_Policy

} from "./routes";

export const BASE_URL = "https://fincart.techtonic.asia/api"; // For develop
export const IMG_BASE_URL = "https://fincart.techtonic.asia"; // For develop

axios.defaults.baseURL = BASE_URL;

export const getHomePageApi = async () => {
  try {
    const response = await axios.get(HOME_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const getInvestPageApi = async () => {
  try {
    const response = await axios.get(INVEST_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const getBecomeagentPageApi = async () => {
  try {
    const response = await axios.get(BECOMEAGENT_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getInTouchFormApi = async (data) => {
  try {
    const response = await axios.post(GET_IN_TOUCH_FORM, data);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const getTouchPlanformApi = async (data) => {
  try {
    const response = await axios.post(GET_IN_TOUCH_PLANFORM, data);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getTouchInvestformApi = async (data) => {
  try {
    const response = await axios.post(GET_IN_TOUCH_INVESTFORM, data);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getinTouchprotectPageformApi = async (data) => {
  try {
    const response = await axios.post(GET_IN_TOUCH_PROTECTRFORM, data);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getinTouchbecomeagentpageformApi = async (data) => {
  try {
    const response = await axios.post(GET_IN_TOUCH_BECOMEAGENTFORM, data);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getinTouchcontactformApi = async (data) => {
  try {
    const response = await axios.post(GET_IN_TOUCH_CONTACTFORM, data);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const getPlanPageApi = async () => {
  try {
    const response = await axios.get(PLAN_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const getProtectPageApi = async () => {
  try {
    const response = await axios.get(PROTECT_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getAboutPageApi = async () => {
  try {
    const response = await axios.get(About_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getHomeblogapi = async () => {
  try {
    const response = await axios.get(
      `${HOME_BLOG}&fields=title&fields=Brief_overview&fields=slug`
    );
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getAllblogapi = async () => {
  try {
    const response = await axios.get(HOME_BLOG);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getsingleblogapi = async (data) => {
  try {
    const response = await axios.get(HOME_BLOG, {
      params: {
        "filters[slug][$eq]": data
      }
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getTechnologyteamapi = async () => {
  try {
    const response = await axios.get(Technology_Team_Invest_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getSupportaccountapi = async () => {
  try {
    const response = await axios.get(Support_Account_Invest_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getFinancialplannerapi = async () => {
  try {
    const response = await axios.get(Financial_Planner_Invest_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getBecomeadvisorfaqapi = async () => {
  try {
    const response = await axios.get(Become_Advisor_faq_Become_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getPlanfaqapi = async () => {
  try {
    const response = await axios.get(Plan_faq_Plan_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getFinancialplanningfaqapi = async () => {
  try {
    const response = await axios.get(Financial_planning_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getInvestmentplanningfaqapi = async () => {
  try {
    const response = await axios.get(investment_planning_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getGoalplanningfaqapi = async () => {
  try {
    const response = await axios.get(Goal_planning_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getTaxsavingandplanningfaqsapi = async () => {
  try {
    const response = await axios.get(Tax_saving_and_planning_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getLegacyandinheritanceplanningfaqsapi = async () => {
  try {
    const response = await axios.get(Legacy_and_inheritance_planning_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getMutualfundfaqsapi = async () => {
  try {
    const response = await axios.get(Mutual_fund_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getSipfaqsapi = async () => {
  try {
    const response = await axios.get(Sip_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getFixedincomereturnsfaqsapi = async () => {
  try {
    const response = await axios.get(Fixed_income_returns_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getGoldfaqsapi = async () => {
  try {
    const response = await axios.get(Gold_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getUnitlinkedinsuranceplansfaqsapi = async () => {
  try {
    const response = await axios.get(Unit_linked_insurance_plans_faqs);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getInvestfaqapi = async () => {
  try {
    const response = await axios.get(Invest_faq_Invest_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getProtectfaqapi = async () => {
  try {
    const response = await axios.get(Protect_faq_Protect_PAGE);
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getInvesttrustapi = async () => {
  try {
    const response = await axios.get(Trusted_Partner_Invest_PAGE);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getContactPageApi = async () => {
  try {
    const response = await axios.get(Contact_Page);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getFinancialplanningApi = async () => {
  try {
    const response = await axios.get(Financial_planning);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getInvestmentplanningApi = async () => {
  try {
    const response = await axios.get(Investment_planning);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getGoalplanningApi = async () => {
  try {
    const response = await axios.get(Goal_planning);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getTaxsavingandplanningApi = async () => {
  try {
    const response = await axios.get(Tax_saving_and_planning);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getLegacyandinheritanceplanningApi = async () => {
  try {
    const response = await axios.get(Legacy_and_inheritance_planning);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getMutualfundApi = async () => {
  try {
    const response = await axios.get(Mutual_fund);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getSipApi = async () => {
  try {
    const response = await axios.get(Sip);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getSipunitlinkedinsuranceplanApi = async () => {
  try {
    const response = await axios.get(Sipunit_linked_insurance_plan);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getGuaranteedincomeinsuranceplanApi = async () => {
  try {
    const response = await axios.get(Guaranteed_income_insurance_plan);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getGoldApi = async () => {
  try {
    const response = await axios.get(Gold);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getAlternativeinvestmentApi = async () => {
  try {
    const response = await axios.get(Alternative_investment);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getFixedincomereturnApi = async () => {
  try {
    const response = await axios.get(Fixed_income_return);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getHealthinsuranceApi = async () => {
  try {
    const response = await axios.get(Health_insurance);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getTerminsuranceApi = async () => {
  try {
    const response = await axios.get(Term_insurance);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getPrivacyPolicy = async () => {
  try {
    const response = await axios.get(Privacy_Policy);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getAssetinsuranceApi = async () => {
  try {
    const response = await axios.get(Asset_insurance);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getCriticalinsuranceApi = async () => {
  try {
    const response = await axios.get(Critical_insurance);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getGuaranteedincomeinsuranceplansfaqsApi = async () => {
  try {
    const response = await axios.get(Guaranteed_income_insurance_plans_faqs);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getTermsandCondition = async () => {
  try {
    const response = await axios.get(Term_andCondition);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getAlternativeinvestmentsfaqsApi = async () => {
  try {
    const response = await axios.get(Alternative_investments_faqs);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getHealthinsurancefaqsApi = async () => {
  try {
    const response = await axios.get(Health_insurance_faqs);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getTerminsurancefaqsApi = async () => {
  try {
    const response = await axios.get(Term_insurance_faqs);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getCriticalinsurancefaqsApi = async () => {
  try {
    const response = await axios.get(Critical_insurance_faqs);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getAssetinsurancehomefaqsApi = async () => {
  try {
    const response = await axios.get(Asset_insurance_faqs_home);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};
export const getUnitlinkedinsuranceplanApi = async () => {
  try {
    const response = await axios.get(Unit_linked_insurance_plan);

    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

