import illustration from "../images/illustration-empty.svg"
import { MdCurrencyPound } from "react-icons/md";

const formatNumber = (num) => {
    return new Intl.NumberFormat().format(Number(num));
};

const Results = ({ results }) => {
    return (
        <div className="results-section">
            {!results ? (
                <div className="empty-state">
                    <img src={illustration} alt="illustration" />
                    <h2>Results shown here</h2>
                    <p className="result__description">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
                </div>
            ) : (
                <div className="result-box">
                    <h2>Your results</h2>
                    <p className="result__description"> Your results are shown below based on the information you provided.
                        To adjust the results, edit the form and click “calculate repayments” again.</p>

                    <div className="kpi">
                        <p>Your monthly repayments</p>
                        <h3>£{formatNumber(results.monthly)}</h3>

                        <hr />
                        <p>Total you'll repay over the term</p>

                        <strong>£{formatNumber(results.total)}</strong>

                    </div>

                </div>
            )}
        </div>
    );
};

export default Results;
