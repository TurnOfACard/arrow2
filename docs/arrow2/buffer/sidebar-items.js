initSidebarItems({"struct":[["Buffer","[`Buffer`] is a contiguous memory region that can be shared across thread boundaries. The easiest way to think about `Buffer<T>` is being equivalent to an immutable `Vec<T>`, with the following differences:"],["MutableBuffer","A [`MutableBuffer`] is this crates’ interface to store types that are byte-like such as `i32`. It behaves like a [`Vec`] but can only hold types supported by the arrow format (`u8-u64`, `i8-i128`, `f32,f64`, [`crate::types::days_ms`] and [`crate::types::months_days_ns`]). When the feature `cache_aligned` is active, memory is allocated along cache lines and in multiple of 64 bytes. A [`MutableBuffer`] can be converted to a [`Buffer`] via `.into`."]]});