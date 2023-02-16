

const Footer = () => {
    return `
    <!-- footer -->
    <div class="container">
        <footer class="footer">       
            <p class="mb-0">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a style="text-decoration: none;" href="">Zuwno</a></p>
            <div class="social-links text-right m-auto ml-sm-auto">
                <a style="text-decoration: none;" href="" class="link"><i class="ti-facebook"></i></a>
                <a style="text-decoration: none;" href="" class="link"><i class="ti-twitter-alt"></i></a>
                <a style="text-decoration: none;" href="" class="link"><i class="ti-google"></i></a>
                <a style="text-decoration: none;" href="" class="link"><i class="ti-pinterest-alt"></i></a>
                <a style="text-decoration: none;" href="" class="link"><i class="ti-instagram"></i></a>
                <a style="text-decoration: none;" href="" class="link"><i class="ti-rss"></i></a>
            </div>
        </footer>
    </div> <!-- end of page footer -->
    
    `
};
export default Footer;