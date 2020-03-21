import React from "react";

function ActsList() {
  return (
    // <!-- ======= Acts Listings ======= -->
    <div id="acts-listings" className="acts-listings">
        <div className="container">

            <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Acts of Kyndness</div>
                </div>
            </div>
        </div>
    </div>

  );
}
export default ActsList;

// ==================== DESIRED CODE FOR ACTS LISTINGS ==================== //



<div className="col-md-6">
  <div className="card">
    <div className="card-header">Acts of Kyndness</div>
    <div className="card-body act-info">
      <div className="row">
        <span className="act-title">Hold the door open for someone</span>
        <span className="line-sep"> | </span>
        <span className="act-cat">Others</span>
        <span className="line-sep"> | </span>
        <span className="act-pts">1 pt</span>

        <p className="act-desc">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  </div>
</div>

// CSS

.card {
  margin-top: 30px;
}

.card-body {
  margin-left: 15px;
}

.card-header {
  font-size: 24px;
}

.act-info {
  display: inline-flex;
  justify-content: flex-start;
  font-size: 16px;
}

.line-sep {
  margin-left: 10px;
  margin-right: 10px;
}

.act-info .row .act-desc {
  font-size: 12px;
}