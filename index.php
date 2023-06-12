<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <?php include 'includes/head.php'; ?>
  <body>
    <?php include 'includes/header.php'; ?>

    <div class="containerr">
      <div class="c-main">
        <!--<div class="nl-cont container">
          <div class="row">
            <div class="nl-c nl-c1 col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <a href="">Physics</a>
            </div>
            <div class="nl-c nl-c2 col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <a href="">Maths</a>
            </div>
            <div class="nl-c nl-c3 col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <a href="">Cs</a>
            </div>
          </div>
        </div>-->

        <div class="slct container">
          <div class="row">
            <div class="slct-inner">
              <!--<fieldset class="field">-->
                <!--<legend>Want to Download</legend>-->
                <div class="st-inner">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 all-st">
                    <div class="">
                      <select class="st-slt" name="stream">
                        <option value="">Get Notes</option>
                        <option value="bsc">Bsc</option>
                        <option value="bca">Bca</option>
                      </select>
                    </div>
                  </div>
                  <div class=" st-sub col-lg-12 col-md-12 col-sm-12 col-xs-12 all-st">
                    <div class="st-sub-inner">
                      <select class="st-sbj" name="">

                      </select>
                    </div>
                  </div>
                  <div class=" st-sem col-lg-12 col-md-12 col-sm-12 col-xs-12 all-st">
                    <div class="st-sem-inner">
                      <select class="st-semst" name="">

                      </select>
                    </div>
                  </div>
                </div>
                </div>
            </fieldset>
          </div>
        </div>

        <div class="up-container container">
          <div class="row">
            <div class="up-inner">
              <fieldset class="field">
                <legend>Want to Upload</legend>
                <div class="upfield-inner">
                  <form class="upf" action="core/worker.php" method="post" enctype="multipart/form-data">
                    <ul>
                      <li>
                        <input type="file" name="files[]" value="" class="upfile" id="file" data-multiple-caption="{count} files selected" multiple>
                        <label for="file" id="uplab">Choose a file</label>
                      </li>
                      <!--<li><input type="text" name="cat" placeholder="Select category"></li>-->
                      <li>
                        <select class="up-slt" name="stream">
                          <option value="">Choose Subject</option>
                          <option value="bsc">Bsc</option>
                          <option value="bca">Bca</option>
                        </select>
                      </li>
                      <li>
                        <div class="up-sub">
                          <div class="up-sub-inner">
                            <select class="up-sbj" name="">

                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="up-sem">
                          <div class="up-sem-inner">
                            <select class="up-semst" name="">

                            </select>
                          </div>
                        </div>
                      </li>
                      <li><input type="submit" name="" class="up-btn" id="upbtn" value="UPLOAD"></li>
                      <li>
                        <div class="error" id="err">
                          <?php
                            if (isset($_SESSION['error'])) {
                              foreach ($_SESSION['error'] as $err) {
                                echo $err;
                              }
                              unset($_SESSION['error']);
                            }
                           ?>
                        </div>
                      </li>
                    </ul>
                  </form>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class=""></div>
    </div>-->
    <?php include 'includes/footer.php'; ?>
  </body>
</html>
