import "./blogPreview.scss"

function BlogPreview({ html }) {

    return (
        <div className="blogPreview border">
            <div className="preview  p-1">
                <h1 className="blog-heading">
                    {
                        "Heading"
                    }
                </h1>
                <div className="image-container">
                    {"file" && <img src={"https://i.postimg.cc/9MmWHSf4/blog.png"} alt="" />}
                </div>
                <div className="text-preview">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero blanditiis officiis architecto natus, repellendus amet cumque, nisi facilis sapiente cupiditate eius eligendi minima rem fugit modi magni non deserunt itaque.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero blanditiis officiis architecto natus, repellendus amet cumque, nisi facilis sapiente cupiditate eius eligendi minima rem fugit modi magni non deserunt itaque.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero blanditiis officiis architecto natus, repellendus amet cumque, nisi facilis sapiente cupiditate eius eligendi minima rem fugit modi magni non deserunt itaque.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero blanditiis officiis architecto natus, repellendus amet cumque, nisi facilis sapiente cupiditate eius eligendi minima rem fugit modi magni non deserunt itaque.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero blanditiis officiis architecto natus, repellendus amet cumque, nisi facilis sapiente cupiditate eius eligendi minima rem fugit modi magni non deserunt itaque.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero blanditiis officiis architecto natus, repellendus amet cumque, nisi facilis sapiente cupiditate eius eligendi minima rem fugit modi magni non deserunt itaque.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPreview